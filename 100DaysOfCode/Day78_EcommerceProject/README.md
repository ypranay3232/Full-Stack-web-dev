# Scatch — Premium Handbags E-Commerce Store

Scatch is a premium, full-featured e-commerce bag store application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. The application implements robust user authentication, secure cookie-based session management, inventory creation/styling, and a fully reactive shopping cart invoice system.

---
# Project is live on : https://ecommerce-project-9gfd.onrender.com/

## 🚀 Key Features

*   **🔒 Secure JWT Authentication:** Hashed password storage using `bcrypt` and token signing via `jsonwebtoken` set in `httpOnly` client cookies.
*   **🎨 Personalized Product Branding:** Product-level color customization—store owners design cards by defining background canvas, detail panel, and text colors directly saved in MongoDB.
*   **📸 Base64 Image Uploads:** Product thumbnails uploaded via `multer` memory storage, converted to Base64 strings, and rendered inline without filesystem dependencies.
*   **🛒 Interactive Shopping Cart:** Dynamic item management including invoice calculations, MRP additions, discount deductions, and net checkout amounts.
*   **🛠️ Inventory Management Dashboard:** Owner dashboard to review, create, audit, and clean up product inventory.

---

## 🛠️ Technology Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB with Mongoose ODM
*   **Templates:** EJS (Embedded JavaScript)
*   **Styling:** Tailwind CSS (loaded via CDN)
*   **Security & Utils:** JSON Web Tokens (JWT), Bcrypt, Multer (file upload), Cookie Parser, Connect Flash (notification sessions).

---

## 📂 Project Structure

```text
Day78_EcommerceProject/
├── config/                  # Database connections and environments
│   ├── development.json     # Configuration file (MongoDB URI)
│   └── mongoose-connection.js
├── controllers/             # Authentication & business logic
│   └── authController.js
├── middlewares/             # Route guards and authorization
│   └── isLoggedIn.js
├── models/                  # Database Mongoose schemas
│   ├── owner-model.js
│   ├── product-model.js
│   └── user-model.js
├── public/                  # Static assets (images, js, stylesheets)
├── routes/                  # Express route mounts
│   ├── index.js             # General landing & authentication
│   ├── OwnersRoute.js       # Admin panels and owner settings
│   ├── ProductsRoute.js     # Image uploads and product deletions
│   └── UsersRoute.js        # Cart listings and item removals
├── utils/                   # Helper utilities
│   └── generateToken.js
├── views/                   # Dynamic templates (EJS)
│   ├── cart.ejs
│   ├── create.ejs
│   ├── index.ejs
│   ├── owner-products.ejs
│   └── shop.ejs
├── .env                     # Local environment secret variables
├── app.js                   # Application entry point
├── package.json             # Package scripts and dependencies
└── README.md                # Guide and documentation
```

---

## 🗺️ Route Maps

### 👤 User Authentication & Navigation (`routes/index.js`)
*   `GET  /` : Renders landing page (registration/login panels).
*   `POST /register` : Registers a new user.
*   `POST /login` : Authenticates user credentials.
*   `GET  /logout` : Clears active token and logs out.
*   `GET  /shop` : Renders product catalogs (requires login).

### 🛍️ Cart Management (`routes/UsersRoute.js`)
*   `GET  /users/cart` : Displays user shopping invoices (requires login).
*   `GET  /users/addtocart/:productid` : Adds product to user cart (requires login).
*   `GET  /users/removefromcart/:productid` : Removes product from user cart (requires login).

### 🛠️ Inventory Creation & Uploads (`routes/ProductsRoute.js`)
*   `POST /products/create` : Processes product creation with Multer file uploads.
*   `GET  /products/delete/:id` : Deletes a product from the database.

### 👑 Owner Dashboard (`routes/OwnersRoute.js`)
*   `GET  /owners/admin` : Renders product creation form.
*   `GET  /owners/products` : Renders inventory panel showing all products.
*   `POST /owners/create` : Creates initial store owner profile (only available in `development` environment).

---

## 🚦 Step-by-Step Running Guide

### 1. Prerequisite: Boot MongoDB
Ensure you have MongoDB running locally on your system.
```bash
# Default connection endpoint
mongodb://127.0.0.1:27017/Ecommerce_store
```

### 2. Install Dependencies
Make sure all required packages are installed in the project directory:
```bash
npm install
```

### 3. Start Development Server
Boot up the Express server in development mode:
```bash
npm run dev
```
You should see database confirmation in the logs:
```text
development
development:mongoose connected
```

### 4. Create Your Account
1. Open your browser and navigate to `http://localhost:3000`.
2. Fill out the **Create your account** form on the left (Full Name, Email, Password) and submit.
3. You will be automatically logged in and redirected to the **Shop** page (`/shop`).

### 5. Design a Product (Admin Panel)
1. Click the **Create Product (Admin)** button in the left sidebar (or go to `http://localhost:3000/owners/admin`).
2. Specify name, price, discount amount, and upload a handbag image.
3. Pick custom background and detail panel colors using the color selectors.
4. Click **Create Product**.

### 6. Verify Shop & Cart Operations
1. Go back to `/shop` to see your custom product card display.
2. Click the **+** (plus) badge to add the handbag to your cart.
3. Click **Cart** in the navigation bar to review the invoice calculations (MRP addition, discount subtraction, and payable cost).

---

## ☁️ Production Deployment Guide

To deploy this backend application to the cloud, follow these two main phases:

### Phase 1: Set Up MongoDB Atlas (Cloud Database)
Since local MongoDB (`127.0.0.1:27017`) cannot be reached by cloud servers, you must host your database in the cloud:
1. Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and sign up for a free account.
2. Create a new **Shared Cluster** (Free tier).
3. Under **Database Access**, create a user credentials (username and password).
4. Under **Network Access**, add an IP entry `0.0.0.0/0` (allows cloud servers to connect to the database securely).
5. Click **Connect** -> **Drivers**, and copy the connection string. It will look like this:
   ```text
   mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` and `<password>` with your database user credentials.

### Phase 2: Deploy to Render.com (Cloud Server)
Render is an excellent free-tier platform for hosting Node.js backend web services:
1. Sign up on [Render.com](https://render.com) and link your GitHub account.
2. Click **New +** -> **Web Service**.
3. Select your GitHub repository for this project.
4. Configure the Web Service settings:
   - **Name:** E.g., `scatch-bag-store`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Click **Advanced** and add the following **Environment Variables**:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `your_mongodb_atlas_connection_string` (from Phase 1)
   - `JWT_KEY` = `some_secure_random_hash_string`
   - `EXPRESS_SESSION_SECRET` = `another_secure_random_session_secret`
6. Click **Deploy Web Service**. Render will build the project and spin up your live URL!

