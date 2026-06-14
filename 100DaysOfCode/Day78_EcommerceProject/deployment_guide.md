# Node.js & MongoDB Backend Deployment Guide

Deploying a full-stack backend application requires coordinating two distinct components:
1.  **A Cloud Database** (MongoDB Atlas) to host your data.
2.  **A Web Application Server** (Render) to execute your server-side Javascript logic.

This document serves as a step-by-step blueprint to deploy this project (and any future Node.js/Express + MongoDB projects) from scratch.

---

##  High-Level Architecture

```text
┌─────────────────┐       HTTPS       ┌─────────────────┐
│                 │ ────────────────> │                 │
│  User's Browser │                   │   Render.com    │
│                 │ <──────────────── │  (Node.js App)  │
└─────────────────┘       HTML        └─────────────────┘
                                               │
                                               │ TCP Connection
                                               │ (IP Whitelisted)
                                               ▼
                                      ┌─────────────────┐
                                      │  MongoDB Atlas  │
                                      │ (Cloud Database)│
                                      └─────────────────┘
```

---

##  Phase 1: Cloud Database Setup (MongoDB Atlas)

Since local databases (`mongodb://127.0.0.1:27017`) cannot be reached by cloud servers, your application must point to a cloud-hosted database.

### 1. Create a MongoDB Atlas Account
*   Navigate to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and sign up for a free tier account. Then click on project new project name the project and next. then create a cluster.

### 2. Create a Free Shared Cluster
*   Click **Create a Database**.
*   Select the **M0 Shared (Free)** tier.
*   Choose a cloud provider (AWS/Google Cloud/Azure) and a region close to your target audience.
*   Click **Create**.

### 3. Configure Database Credentials (User Access)
*   Go to **Security** -> **Database Access** in the left sidebar.
*   Click **Add New Database User**.
*   Select **Password** authentication.
*   Enter a username and password.
    > [!IMPORTANT]
    > **Password Character Rule:** Avoid using special characters (like `@`, `:`, `/`, `+`, `#`) in your database password. MongoDB connection strings parse these characters as delimiters. If they are present, the connection will fail unless they are URL-encoded. Stick to letters and numbers for simplicity.
*   Under **Database User Privileges**, select **Read and write to any database**.
*   Click **Add User**.

### 4. Configure Firewall Rules (Network Access)
By default, Atlas blocks all incoming traffic. You must authorize Render to communicate with your database.
*   Go to **Security** -> **Network Access** in the left sidebar.
*   Click **Add IP Address**.
*   Click **Allow Access from Anywhere** (this will populate the IP address field with `0.0.0.0/0`).
    > [!NOTE]
    > Cloud servers like Render dynamically assign new IP addresses each time the app builds or restarts. Whitelisting `0.0.0.0/0` ensures the database remains reachable across server updates.
*   Click **Confirm** and wait 1–2 minutes for the status to show **Active**.

### 5. Retrieve the Connection String
*   Go to **Deployment** -> **Database** in the left sidebar.
*   Click **Connect** next to your Cluster name.
*   Select **Drivers** (under Connect to your application).
*   Copy the connection URI string. It will look like this:
    ```text
    mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
    ```
*   Replace `<username>` and `<password>` with your database user credentials. Keep this string safe!

---

##  Phase 2: Web Server Deployment (Render.com)

Render hosts your active Node.js server container, binds dynamic port numbers, and serves EJS views.

### 1. Codebase Prerequisites
Before pushing to GitHub, verify your code has the following configurations:
*   **Dynamic Port Binding:** ensure the server listens to `process.env.PORT` instead of a hardcoded port:
    ```javascript
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
    ```
*   **Start Script:** In your [package.json]define the launcher command:
    ```json
    "scripts": {
      "start": "node app.js"
    }
    ```
*   
### 2. Push to GitHub
*   Push all final codebase files to a public or private GitHub repository.
*   *Ensure your `.env` file is added to `.gitignore` so secrets are never pushed to GitHub.*

### 3. Create a Web Service on Render
*   Sign up at [Render.com](https://render.com) and link your GitHub account.
*   Click **New +** (top right) -> **Web Service**.
*   Select your repository and click **Connect**.

### 4. Configure Web Service Settings
*   **Name:** E.g., `scatch-bag-store`
*   **Region:** Select a region close to your database server.
*   **Branch:** `main` (or your active branch).
*   **Language:** `Node`
*   **Build Command:** `npm install`
*   **Start Command:** `npm start`
*   **Instance Type:** `Free`

### 5. Define Environment Variables
*   Scroll down and click **Advanced** -> **Add Environment Variable**.
*   Enter the following key-value pairs:

| Key | Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Switches configurations to production environments. |
| `MONGODB_URI` | `mongodb+srv://...` | The MongoDB Atlas connection string (from Phase 1). |
| `JWT_KEY` | `some_secure_random_key` | Secret key used to sign client cookies. |
| `EXPRESS_SESSION_SECRET` | `key` | Secret key used to sign session tokens. |

*   Click **Save Changes** (or **Create Web Service**).

### 6. Access and Verify
*   Render will begin building the app container, running `npm install`, and booting `npm start`.
*   You can monitor progress in the **Logs** tab.
*   Once the logs display `Server is running on port XXXX` and `mongoose connected`, click the live URL shown in the top-left corner (e.g., `https://scatch-bag-store.onrender.com`).
*   Test registering, logging in, creating products, and adding items to the cart in your live web app.

---

## Common Troubleshooting

### ❌ Error: `Operation findOne() buffering timed out`
*   **Cause:** The backend server cannot connect to MongoDB.
*   **Fix:** Check **Network Access** in MongoDB Atlas. Ensure `0.0.0.0/0` is whitelisted and its status is **Active**. Double-check that you entered the correct password in the `MONGODB_URI` variable on Render.

### ❌ Error: `Port already in use` or connection refused
*   **Cause:** Hardcoded port 3000 in your application.
*   **Fix:** Ensure your entry file binds to the host-assigned port via `process.env.PORT`.

### ❌ Error: Cookie authentication fails in production
*   **Cause:** Setting `secure: true` on cookies over an insecure connection, or mismatched cookie paths.
*   **Fix:** Ensure your cookies are explicitly path-scoped (`path: "/"`) and `secure` is only set to `true` when running on HTTPS (`process.env.NODE_ENV === "production"`).
