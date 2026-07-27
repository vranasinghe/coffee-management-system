import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [orderDraft, setOrderDraft] = useState(null);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const historyForRequest = messages.map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          conversationHistory: historyForRequest,
          conversationId
        })
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || 'The assistant is unavailable right now.');
      }

      setConversationId(json.data.conversationId);
      setMessages((prev) => [...prev, { role: 'assistant', content: json.data.reply }]);
      setOrderDraft(json.data.orderDraft || null);
    } catch (err) {
      console.warn('AI assistant request failed.', err);
      setError("Sorry, I couldn't reach the assistant. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const cartTotal = orderDraft
    ? orderDraft.totalPrice.toFixed(2)
    : null;

  return (
    <div className="ai-widget">
      {open && (
        <div className="ai-panel">
          <div className="ai-panel-header">
            <div>
              <strong>Stradale Assistant</strong>
              <div className="ai-panel-subtitle">Ask about the menu or place an order</div>
            </div>
            <button
              type="button"
              className="ai-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="ai-panel-body" ref={bodyRef}>
            {messages.length === 0 && (
              <div className="ai-message assistant">
                Hi, welcome to Stradale Cafe! I can help you browse the menu, book a table, or place an order right here in chat. What can I get started for you?
              </div>
            )}

            {messages.map((m, idx) => (
              <div key={idx} className={`ai-message ${m.role}`}>
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="ai-message assistant ai-typing">
                <span></span><span></span><span></span>
              </div>
            )}

            {error && <div className="ai-message error">{error}</div>}
          </div>

          {orderDraft && orderDraft.items.length > 0 && (
            <div className="ai-cart">
              <div className="ai-cart-title">Current order</div>
              {orderDraft.items.map((item, idx) => (
                <div className="ai-cart-item" key={idx}>
                  <span>
                    {item.quantity} &times; {item.name}
                    {item.size && item.size !== 'single' ? ` (${item.size})` : ''}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="ai-cart-total">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
            </div>
          )}

          <form className="ai-panel-footer" onSubmit={handleSend}>
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button type="submit" className="ai-send-btn" disabled={loading || !input.trim()} aria-label="Send message">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="ai-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <i className={`fa ${open ? 'fa-times' : 'fa-comments'}`}></i>
      </button>
    </div>
  );
};

export default AIAssistant;
