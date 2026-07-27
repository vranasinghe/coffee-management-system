# Stradale Cafe - Coffee Shop Management System

A premium, full-stack web application and management system built for **Stradale Cafe**. This repository is structured as a monorepo featuring a modern **React + Vite** single-page application on the frontend, paired with an expressive **Node.js + Express** REST API on the backend backed by **MongoDB Atlas** and **Anthropic's Claude AI SDK**.

---

## 🍽️ System Overview

Stradale Cafe Management System empowers customers to seamlessly explore coffee shop menus, place online pickup orders, reserve tables, view the photo gallery, contact the shop, and interact with an **AI Ordering Assistant**. 

Simultaneously, it offers specialized administrative and staff dashboards to manage active orders, control inventory stock levels, update menu items, review reservations, and respond to customer messages.

---

## 🚀 Key Features

* **🤖 AI Ordering & Reservation Assistant**: Integrated AI chat widget powered by Anthropic's Claude SDK (`@anthropic-ai/sdk`). Customers can ask for recommendations, search live menu items with pricing, dynamically construct an order draft, and place table reservations directly via conversation.
* **🔒 Secure Authentication & Authorization**: Multi-role support (Admin, Staff, Customer) using JWT (JSON Web Tokens) with salted `bcryptjs` password hashing.
* **☕ Dynamic Menu Manager**: Supports categories for Coffees, Espressos, Non-Coffee, Add-ons, Breads, and Snacks with size-based pricing options (Medium 16oz / Large 20oz). Includes smart offline fallback UI.
* **📅 Table Reservations & Order Tracking**: Instant booking system for guests to reserve tables (notifying date, time, guest counts, and contact info) and place pickup orders.
* **📦 Smart Inventory Control**: Restricted staff dashboard endpoints to track raw ingredients (coffee beans, milk, paper cups, syrup) with minimum stock alert thresholds.
* **🖼️ Interactive Photo Gallery**: Dynamic photo gallery displaying cafe highlights fetched directly from backend models.
* **✉️ Contact & Feedback System**: Form for guest inquiries with status tracking (read/unread) for employees.
* **⚡ One-Click Server Launcher**: Includes `start_servers.bat` script to easily spin up both backend and frontend development environments simultaneously.

---

## 🛠️ Technology Stack

### Frontend
* **Core Library**: React (v18)
* **Build Tool**: Vite
* **Styling**: Vanilla CSS3, Bootstrap 5, Material Design Bootstrap (MDB), FontAwesome
* **HTTP Client**: Fetch API / Axios

### Backend
* **Runtime**: Node.js
* **Framework**: Express.js
* **AI Engine**: Anthropic Claude API (`@anthropic-ai/sdk`)
* **Database**: MongoDB Atlas / Local MongoDB
* **ORM**: Mongoose (v7)
* **Security & Auth**: JSON Web Tokens (`jsonwebtoken`) & `bcryptjs`

---

## 📂 Repository Structure

```directory
coffee-management-system/
├── start_servers.bat     # Windows batch script to start both dev servers
├── frontend/             # React SPA built with Vite
│   ├── public/           # Static assets, fallback media, and vendor files
│   └── src/
│       ├── assets/       # Visual assets and images
│       ├── components/   # UI components (Navbar, Home, Menu, AIAssistant, Gallery, Reservation, etc.)
│       └── pages/        # Public user interface & Admin dashboard pages
└── backend/              # Node.js + Express REST API
    ├── config/           # Database configuration (db.js)
    ├── controllers/      # Route controllers (aiController, authController, menuController, orderController, etc.)
    ├── middlewares/      # JWT protection & error handling middleware
    ├── models/           # Mongoose Data Schemas (User, Menu, Order, Inventory, Gallery, Contact)
    ├── routes/           # RESTful API Endpoints
    └── scripts/          # Database seeding script (seed.js)
```

---

## ⚙️ Quick Start & Installation

### Prerequisites
* **Node.js** (v16 or higher) installed locally.
* **MongoDB** connection string (local MongoDB instance or MongoDB Atlas Cloud).
* **Anthropic API Key** (Optional, required for AI Assistant functionality).

---

### 1. Backend Setup

1. Navigate into the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your environment variables by creating a `.env` file inside `backend/`:
   ```env
   PORT=5000
   
   # MongoDB Atlas Connection URI
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.vtlgm2s.mongodb.net/Coffee_Shop
   
   # JWT Secret Key
   JWT_SECRET=your_super_secret_jwt_key
   
   # Anthropic API Key for AI Ordering Assistant
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

4. **Seed the Database** (Initializes admin/staff accounts, default menu, inventory items, and gallery cards):
   ```bash
   npm run seed
   ```

5. Start the backend development server:
   ```bash
   npm run dev
   ```

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the Vite development server:
   ```bash
   npm run dev
   ```
   *The client application will run at `http://localhost:5173`.*

---

### 3. Shortcut: Run Both Servers Simultaneously

On Windows, you can start both the backend and frontend servers at once by running:

```cmd
.\start_servers.bat
```

---

## 🔒 Default Credentials (After Seeding)

Once you execute `npm run seed` in the backend, you can log in using these pre-configured accounts:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin@stradale.com` | `admin123` |
| **Barista / Staff** | `staff@stradale.com` | `staff123` |
| **Customer** | `john@gmail.com` | `password123` |

---

## 🤖 AI Assistant Capabilities

The AI assistant endpoint (`POST /api/ai/chat`) provides an interactive ordering experience:
* **`search_menu`**: Queries real-time menu items from MongoDB by name or category.
* **`add_to_order`**: Builds a draft shopping cart with item sizes and quantities.
* **`create_reservation`**: Books a table reservation directly through conversation.
* **`finalize_order`**: Submits active orders to the main order database.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
