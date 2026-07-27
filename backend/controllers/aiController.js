const crypto = require('crypto');
const Anthropic = require('@anthropic-ai/sdk');
const Menu = require('../models/menuModel');
const { findMenuItems } = require('./menuController');
const { createOrderRecord } = require('./orderController');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODEL = 'claude-sonnet-5';
const MAX_TOOL_ROUNDS = 6;

const DRINK_CATEGORIES = ['coffee', 'espresso', 'non-coffee'];

// In-memory per-conversation cart. Cleared on server restart by design -
// this is a short-lived ordering session, not durable storage. See summary
// notes for why a Mongo-backed draft was not used instead.
const drafts = new Map();

const getDraft = (conversationId) => {
    if (!drafts.has(conversationId)) {
        drafts.set(conversationId, { items: [], reservation: null });
    }
    return drafts.get(conversationId);
};

const SYSTEM_PROMPT = `You are the ordering assistant for Stradale Cafe, a coffee shop. You help guests browse the menu, build an order, and/or book a table reservation, all inside this chat.

Menu categories: coffee, espresso, non-coffee (all priced by size: medium 16oz / large 20oz), and add-on, bread, snack (each a single price, no size).

Rules you must follow:
- Never invent menu items, prices, or ids. Always call search_menu first and only reference items it returns.
- When adding a drink (coffee/espresso/non-coffee) with add_to_order, you must include a size of "medium" or "large". Items in add-on/bread/snack have no size - omit it.
- Build the cart one item at a time with add_to_order as the guest requests items.
- Before calling finalize_order or create_reservation, first summarize the full cart (items, quantities, sizes, total price) or the reservation details (date, time, guests, contact info) back to the guest in plain text, and wait for their explicit confirmation in a following message. Do not call finalize_order or create_reservation in the same turn you first present that summary.
- Reservations and orders are separate concepts: a reservation books a table, an order is items for pickup. A guest can do either or both in one conversation.
- Keep replies short, warm, and conversational - this is a chat widget, not an email.`;

const tools = [
    {
        name: 'search_menu',
        description: 'Search the real Stradale Cafe menu. Returns matching items with their _id, name, category and pricing. Always call this before adding anything to an order.',
        input_schema: {
            type: 'object',
            properties: {
                category: {
                    type: 'string',
                    enum: ['coffee', 'espresso', 'non-coffee', 'add-on', 'bread', 'snack'],
                    description: 'Filter by menu category'
                },
                query: {
                    type: 'string',
                    description: 'Case-insensitive search on item name, e.g. "latte"'
                }
            }
        }
    },
    {
        name: 'add_to_order',
        description: "Add one item to the guest's in-progress cart for this conversation.",
        input_schema: {
            type: 'object',
            properties: {
                menuItemId: { type: 'string', description: 'The _id of the menu item, from search_menu results' },
                size: { type: 'string', enum: ['medium', 'large'], description: 'Required for coffee/espresso/non-coffee items. Omit for add-on/bread/snack.' },
                quantity: { type: 'number', description: 'How many of this item to add' }
            },
            required: ['menuItemId', 'quantity']
        }
    },
    {
        name: 'create_reservation',
        description: 'Book a table reservation. Only call this after the guest has explicitly confirmed the date, time, guest count and contact details you summarized to them.',
        input_schema: {
            type: 'object',
            properties: {
                date: { type: 'string', description: 'Reservation date, YYYY-MM-DD' },
                time: { type: 'string', description: 'Reservation time, HH:MM 24h, one of the hourly slots between 10:00 and 22:00' },
                guests: { type: 'string', enum: ['1-4', '5-8', '11-20', '20+'], description: 'Party size band' },
                name: { type: 'string' },
                email: { type: 'string' },
                phone: { type: 'string' },
                message: { type: 'string', description: 'Optional note from the guest' }
            },
            required: ['date', 'time', 'guests', 'name', 'email', 'phone']
        }
    },
    {
        name: 'finalize_order',
        description: "Submit the guest's accumulated cart as a real order. Only call this after the guest has explicitly confirmed the cart summary you gave them, and only if add_to_order has been called at least once.",
        input_schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                phone: { type: 'string' }
            },
            required: ['name', 'email', 'phone']
        }
    }
];

const serializeMenuItem = (item) => ({
    id: item._id,
    name: item.name,
    category: item.category,
    price: item.price,
    priceMedium: item.priceMedium,
    priceLarge: item.priceLarge,
    isRecommended: item.isRecommended,
    isNewItem: item.isNewItem
});

const runTool = async (name, input, draft) => {
    switch (name) {
        case 'search_menu': {
            const items = await findMenuItems({ category: input.category, query: input.query });
            return { items: items.map(serializeMenuItem) };
        }

        case 'add_to_order': {
            const menuItem = await Menu.findById(input.menuItemId).catch(() => null);
            if (!menuItem) {
                return { error: 'Menu item not found. Call search_menu again to get a valid id.' };
            }

            const isDrink = DRINK_CATEGORIES.includes(menuItem.category);
            let price;
            let size = 'single';

            if (isDrink) {
                if (!['medium', 'large'].includes(input.size)) {
                    return { error: `${menuItem.name} needs a size: "medium" or "large".` };
                }
                size = input.size;
                price = size === 'large' ? menuItem.priceLarge : menuItem.priceMedium;
            } else {
                price = menuItem.price;
            }

            const quantity = Number(input.quantity) > 0 ? Number(input.quantity) : 1;

            draft.items.push({
                menuItem: menuItem._id,
                name: menuItem.name,
                quantity,
                price,
                size
            });

            return {
                success: true,
                cart: draft.items,
                cartTotal: draft.items.reduce((acc, i) => acc + i.price * i.quantity, 0)
            };
        }

        case 'create_reservation': {
            try {
                const order = await createOrderRecord({
                    name: input.name,
                    email: input.email,
                    phone: input.phone,
                    date: input.date,
                    time: input.time,
                    guests: input.guests,
                    message: input.message,
                    items: [],
                    type: 'reservation'
                });
                draft.reservation = order;
                return { success: true, orderId: order._id, status: order.status };
            } catch (err) {
                return { error: err.message };
            }
        }

        case 'finalize_order': {
            if (draft.items.length === 0) {
                return { error: 'The cart is empty. Use add_to_order to add items before finalizing.' };
            }
            try {
                // The Order schema requires date/time/guests on every document,
                // including pickup-only orders with no table reservation. If a
                // reservation was made earlier in this conversation, reuse its
                // details; otherwise fall back to a same-day pickup default.
                // See summary notes - this is a pre-existing schema constraint,
                // not something invented for this feature.
                const today = new Date().toISOString().slice(0, 10);
                const date = draft.reservation ? draft.reservation.date : today;
                const time = draft.reservation ? draft.reservation.time : 'ASAP';
                const guests = draft.reservation ? draft.reservation.guests : '1-4';
                const type = draft.reservation ? 'both' : 'order';

                const order = await createOrderRecord({
                    name: input.name,
                    email: input.email,
                    phone: input.phone,
                    date,
                    time,
                    guests,
                    items: draft.items,
                    type
                });

                const total = order.totalPrice;
                draft.items = [];
                draft.reservation = null;

                return { success: true, orderId: order._id, totalPrice: total, status: order.status };
            } catch (err) {
                return { error: err.message };
            }
        }

        default:
            return { error: `Unknown tool "${name}"` };
    }
};

// @desc    Chat with the AI ordering assistant (tool-use loop over the Anthropic API)
// @route   POST /api/ai/chat
// @access  Public
exports.chat = async (req, res, next) => {
    try {
        const { message, conversationHistory, conversationId: incomingId } = req.body;

        if (!message) {
            res.status(400);
            return next(new Error('Please provide a message'));
        }

        const conversationId = incomingId || crypto.randomUUID();
        const draft = getDraft(conversationId);

        const messages = [...(conversationHistory || []), { role: 'user', content: message }];

        let finalReply = null;
        let round = 0;

        while (finalReply === null && round < MAX_TOOL_ROUNDS) {
            round += 1;

            const response = await anthropic.messages.create({
                model: MODEL,
                max_tokens: 1024,
                system: SYSTEM_PROMPT,
                tools,
                messages
            });

            if (response.stop_reason === 'tool_use') {
                messages.push({ role: 'assistant', content: response.content });

                const toolResults = [];
                for (const block of response.content) {
                    if (block.type !== 'tool_use') continue;
                    const result = await runTool(block.name, block.input, draft);
                    toolResults.push({
                        type: 'tool_result',
                        tool_use_id: block.id,
                        content: JSON.stringify(result)
                    });
                }
                messages.push({ role: 'user', content: toolResults });
            } else {
                const textBlock = response.content.find((b) => b.type === 'text');
                finalReply = textBlock ? textBlock.text : '';
            }
        }

        if (finalReply === null) {
            finalReply = "Sorry, that took a bit long to work out - could you try again or rephrase?";
        }

        const cartTotal = draft.items.reduce((acc, i) => acc + i.price * i.quantity, 0);

        res.json({
            success: true,
            data: {
                reply: finalReply,
                conversationId,
                orderDraft: draft.items.length > 0 ? { items: draft.items, totalPrice: cartTotal } : undefined
            }
        });
    } catch (error) {
        next(error);
    }
};
