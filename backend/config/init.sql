-- Coffee Management System MySQL Initialization Script
-- Created on: 2026-07-01
-- Target Database: MySQL (InnoDB Engine)

-- 1. Database Creation & Activation
CREATE DATABASE IF NOT EXISTS coffee_management;
USE coffee_management;

-- 2. Drop Existing Tables in Correct Order (Dependent child tables first)
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

-- 3. Schema Setup

-- 3.1. Users Table
-- Stores user accounts, their roles, and hashed credentials
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.2. Products Table
-- Catalog of menu items available for purchase
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.3. Inventory Table
-- Tracks ingredients and operating materials/supplies in stock
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL UNIQUE,
    quantity_in_stock DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    unit VARCHAR(50) NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.4. Orders Table
-- Tracks order history, customer names, and current fulfillment status
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3.5. Order Items Table
-- Line items detailing what products were sold under each order
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price_at_time DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id)
        REFERENCES orders (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_order_items_product FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 4. Initial Seed Data

-- 4.1. Default Admin User
-- -----------------------------------------------------------------------------
-- USERNAME: admin
-- PASSWORD: admin123
-- BCRYPT HASH: $2b$10$P4ko5wX/kC4Q0ps9SI.sxOvvkchCv3CcANJDSxGdVtTlkELlmAxQa
-- 
-- Generating/Verifying in Node.js (with bcrypt or bcryptjs):
-- 
--   const bcrypt = require('bcryptjs'); // or 'bcrypt'
--   
--   // To Hash:
--   const hash = await bcrypt.hash('admin123', 10);
--   
--   // To Verify:
--   const isValid = await bcrypt.compare('admin123', '$2b$10$P4ko5wX/kC4Q0ps9SI.sxOvvkchCv3CcANJDSxGdVtTlkELlmAxQa');
--   console.log(isValid); // true
-- -----------------------------------------------------------------------------
INSERT INTO users (username, password_hash, role) VALUES 
('admin', '$2b$10$P4ko5wX/kC4Q0ps9SI.sxOvvkchCv3CcANJDSxGdVtTlkELlmAxQa', 'admin');

-- 4.2. Products Data
INSERT INTO products (name, description, price, category) VALUES
('Espresso', 'Rich and bold double shot of espresso', 2.50, 'Beverages'),
('Americano', 'Espresso shots topped with hot water', 3.00, 'Beverages'),
('Cappuccino', 'Espresso with steamed milk and a thick layer of foam', 3.75, 'Beverages'),
('Caffè Latte', 'Espresso with steamed milk and a thin layer of foam', 4.00, 'Beverages'),
('Caramel Macchiato', 'Espresso with steamed milk, vanilla syrup, and caramel drizzle', 4.50, 'Beverages'),
('Chai Latte', 'Black tea infused with cardamom, cinnamon, spices, and steamed milk', 4.25, 'Beverages'),
('Butter Croissant', 'Flaky, buttery French pastry', 2.75, 'Food'),
('Chocolate Muffin', 'Rich double chocolate muffin', 3.00, 'Food'),
('Blueberry Scone', 'Freshly baked scone loaded with wild blueberries', 3.25, 'Food');

-- 4.3. Inventory Data
INSERT INTO inventory (item_name, quantity_in_stock, unit) VALUES
('Espresso Coffee Beans', 50.00, 'kg'),
('Whole Milk', 100.00, 'liters'),
('Oat Milk', 30.00, 'liters'),
('Caramel Sauce', 5.00, 'liters'),
('Vanilla Syrup', 10.00, 'liters'),
('Chai Tea Concentrate', 15.00, 'liters'),
('Chocolate Chips', 8.50, 'kg'),
('Paper Cups (12oz)', 500.00, 'pcs'),
('Paper Cups (16oz)', 400.00, 'pcs'),
('Coffee Sleeves', 1000.00, 'pcs'),
('Stirrers', 1500.00, 'pcs');

-- 4.4. Dummy Orders & Associated Order Items
-- Order 1: Completed order for John Doe (Total = $6.75)
INSERT INTO orders (id, customer_name, total_amount, status) VALUES 
(1, 'John Doe', 6.75, 'completed');

INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES
(1, 4, 1, 4.00), -- 1 x Caffè Latte
(1, 7, 1, 2.75); -- 1 x Butter Croissant

-- Order 2: Pending order for Jane Smith (Total = $10.50)
INSERT INTO orders (id, customer_name, total_amount, status) VALUES 
(2, 'Jane Smith', 10.50, 'pending');

INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES
(2, 3, 2, 3.75), -- 2 x Cappuccino
(2, 8, 1, 3.00); -- 1 x Chocolate Muffin

-- Order 3: Cancelled order for Bob Johnson (Total = $2.50)
INSERT INTO orders (id, customer_name, total_amount, status) VALUES 
(3, 'Bob Johnson', 2.50, 'cancelled');

INSERT INTO order_items (order_id, product_id, quantity, price_at_time) VALUES
(3, 1, 1, 2.50); -- 1 x Espresso
