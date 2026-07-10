# Etoffe de Luxe — MERN E-Commerce Application

**Etoffe de Luxe** is a production-ready, full-stack MERN (MongoDB, Express, React, Node.js) e-commerce storefront. It consists of three primary modules:
1. **Frontend Website**: A premium, responsive shopping client for customers.
2. **Admin Dashboard**: A secure portal for catalog administrators to list items and update order delivery tracking.
3. **Backend API Server**: The MERN engine managing database transactions, image uploads, and authentication.

---

## 🔗 Live Deployments
*   **Admin Dashboard (Vercel)**: [https://ecommer-project-deployed.vercel.app/](https://ecommer-project-deployed.vercel.app/)
*   **Backend API (Render)**: [https://ecommer-project-deployed.onrender.com](https://ecommer-project-deployed.onrender.com)

---

## 🚀 Key Features

### 🛒 Customer Storefront (Frontend)
*   **Access Control**: User accounts are required; anonymous guests are automatically restricted and prompted to register/login before browsing.
*   **Catalog Browser**: Filters items by categories, subcategories, search keywords, and price sort dropdowns.
*   **Dynamic Cart**: Manages items and sizes in the cart, persisting values in the database for logged-in sessions.
*   **Checkout Gates**: Supports Cash on Delivery (COD), Stripe Checkout redirections, and Razorpay transactions.
*   **Orders Log**: Allows customers to view past purchases and track shipping updates in real-time.

### 🛡️ Management Console (Admin Dashboard)
*   **Admin Access**: Secure portal checking credentials against backend configuration secrets.
*   **Inventory Manager**: Allows admins to add new products, toggle sizes (S, M, L, XL, XXL), classify categories, and select up to 4 item image files to stream directly to Cloudinary.
*   **Catalog Lookup**: Displays current items lists with options to remove/delete entries.
*   **Order Tracking**: Displays customer information (shipping address, contact email, phone number), payment gateways, and a shipment status selector.

### ⚙️ API Server (Backend)
*   **Database Schema**: User, Product, and Order models built using Mongoose.
*   **JWT Token Signatures**: Authenticates users and isolates administrative routes using middleware check functions.
*   **DNS Resolution Fallback**: Pre-configured process DNS parameters to bypass local DNS blocks on MongoDB SRV lookups.

---

## 🛠️ Installation & Setup

1. Clone the repository and configure your environment files:
   * Populate your MongoDB Atlas string, Cloudinary credentials, and JWT secret inside **`Backend/.env`**:
     ```env
     PORT=4000
     MONGODB_URI="your_mongodb_atlas_connection_string"
     JWT_SECRET="your_jwt_secret_signature"
     CLOUDINARY_API_KEY="your_cloudinary_api_key"
     CLOUDINARY_SECRET_KEY="your_cloudinary_secret_key"
     CLOUDINARY_NAME="your_cloudinary_cloud_name"
     ADMIN_EMAIL="admin@etoffedeluxe.com"
     ADMIN_PASSWORD="admin123"
     ```

2. Open three separate terminals to start the modules:
   * **Start Backend Server**:
     ```bash
     cd Backend
     npm install
     npm run server
     ```
   * **Start Customer Site**:
     ```bash
     cd Frontend
     npm install
     npm run dev
     ```
   * **Start Admin Dashboard**:
     ```bash
     cd Admin
     npm install
     npm run dev
     ```

---

## 👥 Test Credentials

To test the live deployment quickly, you can use these default credentials:

### 🛡️ Admin Dashboard
*   **Email**: `admin@etoffedeluxe.com`
*   **Password**: `admin123`

### 🛒 Customer Storefront
*   **Email**: `demo@gmail.com`
*   **Password**: `demo#@123`
*   *(Test username: **demo**)*

---

## 🎯 How to Test

Follow this walkthrough to test the full-stack database cycle:

### 1. Catalog a Product (Admin Panel)
1. Navigate to the **Admin Panel** (`http://localhost:5174/` or `http://localhost:5173/` depending on your ports).
2. Log in using the admin credentials:
   * **Email**: `admin@etoffedeluxe.com`
   * **Password**: `admin123`
3. Click **Add Items** on the sidebar.
4. Upload up to 4 local image files. Fill out the details (name, description, price, category) and click **ADD PRODUCT**.
5. Go to **List Items** on the sidebar to verify your new product is listed in your catalog database.

### 2. Purchase the Product (Customer Website)
1. Go back to the **Customer Website** (`http://localhost:5173/` or `http://localhost:5172/`).
2. Register a new customer account (or log in).
3. The landing page and collection grid will immediately render the product you just created in the Admin panel!
4. Click on the product, select your size, and click **ADD TO CART**.
5. Open your shopping cart, click **PROCEED TO CHECKOUT**, and enter your shipping details (including your address and mobile phone number).
6. Select **CASH ON DELIVERY** (or Stripe) and click **PLACE ORDER**.
7. You will automatically navigate to your **My Orders** screen showing your purchase!

### 3. Dispatch the Shipment (Admin Panel)
1. Go back to the **Admin Dashboard** and open the **Orders** tab.
2. The order you just placed will appear immediately, displaying the customer's full address, name, email, phone number, and items!
3. Change the tracking status dropdown from *Order Placed* to **Shipped** (or *Delivered*).
4. Refresh your customer website **My Orders** page; the tracking status will update to **Shipped** instantly!
