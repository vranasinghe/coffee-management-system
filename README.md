# Stradale Cafe - Coffee Shop Management System

A premium, full-stack management system designed for **Stradale Cafe**. This repository is organized as a monorepo containing a modern **React-Vite** frontend and a robust **Node-Express** backend connected to MongoDB Atlas.

---

## 🍽️ System Overview

Stradale Cafe Management System provides customers with a beautiful, responsive interface to view menus, make reservations, view the gallery, and send feedback. Concurrently, it exposes backend management endpoints for staff and administrators to track inventory, update menus, manage table bookings, and read client messages.

---

## 📂 Repository Structure

```directory
coffee-management-system/
├── frontend/             # React SPA built with Vite
│   ├── public/           # Static assets, styling, and vendor files
│   └── src/
│       ├── components/   # UI components (Home, Menu, Gallery, Reservation, etc.)
│       └── pages/        # Private Admin and Public user directories
└── backend/              # Node.js + Express REST API
    ├── config/           # Database connections
    ├── controllers/      # Route handler controllers (Auth, Menu, Orders, Inventory, etc.)
    ├── models/           # MongoDB Mongoose schemas
    ├── routes/           # REST API endpoints mapping
    ├── middlewares/      # JWT protection and error handling
    └── scripts/          # Seeding script for starter database values
```

---

## 🚀 Key Features

*   **🔒 Secure Authentication**: Multi-role support (Admin, Staff, and Customer) with JWT authentication and salted bcrypt password hashing.
*   **☕ Dynamic Menu Manager**: Categories for Coffees, Espressos, Non-Coffee, Add-ons, Breads, and Snacks with size-specific pricing. Supports offline fallback if the API is down.
*   **📅 Table Reservations & Orders**: Public booking system allowing guests to reserve tables (notifying the name, email, phone, date, time, and number of guests).
*   **📦 Smart Inventory Tracking**: Restrictive dashboard endpoints for tracking stocks (coffee beans, whole milk, paper cups, sugar) with minimum warning thresholds.
*   **🖼️ Gallery Integration**: Dynamic photo gallery fetching live assets from the backend with a styled offline fallback.
*   **✉️ Contact Messages**: Instant feedback form for guests, with status tracking (read/unread) for employees.

---

## 🛠️ Technology Stack

### Frontend
*   **Library**: React (v18)
*   **Tooling**: Vite
*   **Styling**: Vanilla CSS, Bootstrap & Material Design Bootstrap (MDB)

### Backend
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB Atlas / Local MongoDB
*   **ORM**: Mongoose (v7)
*   **Security**: JWT (JsonWebToken) & BcryptJS

---

## ⚙️ Quick Start & Installation

### Prerequisites
*   Node.js installed locally.
*   MongoDB instance (either local or MongoDB Atlas connection string).

---

### 1. Backend Setup

1.  Navigate into the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure your environment variables. Create a `.env` file in the `backend/` directory matching [backend/.env.example](file:///c:/Users/LENOVO/OneDrive/Desktop/Coffee%20Shop%20Managemet%20System/coffee-management-system/backend/.env.example):
    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/Coffee_Shop
    JWT_SECRET=your_super_secret_jwt_key
    ```
4.  **Seed the Database**: Populate default items (Barista/Admin profiles, standard menu lists, starting inventory materials, and gallery cards):
    ```bash
    npm run seed
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

---

### 2. Frontend Setup

1.  Navigate into the frontend directory:
    ```bash
    cd ../frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Vite hot-reloading development server:
    ```bash
    npm run dev
    ```
    *The web application will open at `http://localhost:5173`.*

---

## 🔒 Default Login Credentials (After Seeding)

You can use the following seeded accounts to verify authentication and authorization:

*   **Administrator**: `admin@stradale.com` / `admin123`
*   **Barista / Staff**: `staff@stradale.com` / `staff123`
*   **Customer**: `john@gmail.com` / `password123`
