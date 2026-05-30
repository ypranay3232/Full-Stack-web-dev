# Day 76: Authentication and User Management

A step-by-step implementation guide to building a secure Node.js, Express, and MongoDB web application featuring password hashing (`bcrypt`), JSON Web Tokens (`jsonwebtoken`), and cookies (`cookie-parser`).

---

## 🛠️ Step 1: Project Setup

1. **Initialize the project**:
   ```bash
   npm init -y
   ```
2. **Configure Entry Point**: In your `package.json`, set the entry point to `app.js`:
   ```json
   "main": "app.js"
   ```
3. **Install Dependencies**: Install the required packages for routing, templates, database, hashing, and token handling:
   ```bash
   npm install express ejs mongoose bcrypt jsonwebtoken cookie-parser nodemon
   ```
4. **Project Structure**: Create the following folders and files:
   ```text
   Day76_Auth_Users/
   ├── models/
   │   └── usermodel.js
   ├── views/
   │   └── index.ejs
   ├── Public/
   │   ├── images/
   │   ├── javascript/
   │   └── stylesheets/
   ├── app.js
   └── notes.md
   ```

---

## 🗄️ Step 2: Database and User Model Setup

Define the database connection and schema in [models/usermodel.js](file:///c:/Users/ypran/OneDrive/Desktop/Full-Stack-web-dev/100DaysOfCode/Day76_Auth_Users/models/usermodel.js).

> [!IMPORTANT]
> Ensure that your local MongoDB service is running on port `27017` before launching the application.

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB local instance
mongoose.connect('mongodb://127.0.0.1:27017/userauth_is_DB_name');

// Define User Schema
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number }
});

// Export the User Model
module.exports = mongoose.model('user', userSchema);
```

---

## 🎨 Step 3: Frontend View (EJS Template)

Create the signup form in [views/index.ejs](file:///c:/Users/ypran/OneDrive/Desktop/Full-Stack-web-dev/100DaysOfCode/Day76_Auth_Users/views/index.ejs). We use Tailwind CSS for a clean, modern design.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>User Authentication</title>
</head>
<body class="bg-zinc-950 text-white min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl">
        <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form method="post" action="/create" class="flex flex-col gap-4">
            <input class="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none transition" type="text" placeholder="Username" name="username" required>
            <input class="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none transition" type="email" placeholder="Email" name="email" required>
            <input class="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none transition" type="password" placeholder="Password" name="password" required>
            <input class="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-blue-500 focus:outline-none transition" type="number" placeholder="Age" name="age" required>
            <button class="w-full py-3 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer" type="submit">Create User</button>
        </form>
    </div>
</body>
</html>
```

---

## ⚙️ Step 4: Express Server setup

Implement the server and authentication logic in [app.js](file:///c:/Users/ypran/OneDrive/Desktop/Full-Stack-web-dev/100DaysOfCode/Day76_Auth_Users/app.js).

### 1. Import Packages & Middleware
```javascript
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('./models/usermodel');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(cookieParser());
```

### 2. User Registration (With Hashing & JWT)
When creating a user, we must **hash the password** before saving it to the database, and **set a cookie** containing the JWT.

```javascript
app.post("/create", async (req, res) => {
    let { username, email, password, age } = req.body;

    try {
        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user in the database
        let createdUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
            age
        });

        // Generate JWT token
        let token = jwt.sign({ email }, "your_jwt_secret_key");

        // Set JWT as a cookie and return the created user details
        res.cookie("token", token, { httpOnly: true });
        res.send(createdUser);
    } catch (err) {
        res.status(500).send("Error creating user: " + err.message);
    }
});
```

### 3. Login Verification Flow
When logging in, we find the user by their email, compare the incoming password with the hashed password using `bcrypt.compare()`, and generate a JWT token on success.

```javascript
app.post("/login", async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.send("something is wrong");

    // Compare hashed password
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            // Generate JWT and set it in cookies
            let token = jwt.sign({ email: user.email }, "your_jwt_secret_key");
            res.cookie("token", token);
            res.redirect("/");
        } else {
            res.send("something is wrong");
        }
    });
});
```

### 4. Access Protected Route / Profile
To verify a user or read their profile details later:

```javascript
app.get("/profile", (req, res) => {
    let token = req.cookies.token;
    if (!token) return res.status(401).send("Unauthorized");

    try {
        // Verify and decode the JWT token
        let decoded = jwt.verify(token, "your_jwt_secret_key");
        res.send(`Logged in as: ${decoded.email}`);
    } catch (err) {
        res.status(403).send("Invalid Token");
    }
});
```

---

## 🚀 Running the Project

Start the application in development mode with auto-reload:
```bash
npx nodemon app.js
```

---

## ⚠️ Troubleshooting & Common Mistakes

### 1. MongoDB Service is Stopped (Connection Timeout & Compass Offline)
* **The Mistake**: Running `app.js` or attempting to open **MongoDB Compass** to view users while the local MongoDB Windows Service is stopped.
* **Symptoms**:
  - Node server errors out with: `MongooseError: Operation users.insertOne() buffering timed out after 10000ms`.
  - MongoDB Compass fails to connect, loading indefinitely or showing a connection error.
* **The Fix**: Start the local MongoDB service.
  - **Via Services App**: Press `Win + R`, type `services.msc`, locate **MongoDB Server (MongoDB)**, right-click, and select **Start**.
  - **Via PowerShell (Admin)**: 
    ```powershell
    Start-Service MongoDB
    ```

### 2. Case Sensitivity / Reference Errors in Imports
* **The Mistake**: Importing the database model with one casing format (e.g., `const usermodel = ...` with lowercase `m`) and referencing it with another casing (e.g., `userModel.create()` with uppercase `M`).
* **Symptoms**: Node app crashes on page submit with: `ReferenceError: userModel is not defined`.
* **The Fix**: Ensure your import variable name matches the exact casing used in your route handlers (e.g., `const userModel = require('./models/usermodel')`).

### 3. "Cannot POST /login" Error on Form Submission
* **The Mistake**: Defining the route handling the login form submission as `app.get("/login", ...)` instead of `app.post("/login", ...)`.
* **Symptoms**: Submitting the login form displays `Cannot POST /login` in the browser.
* **The Fix**: The HTML form submits via `method="POST"` to `/login`. Ensure you have a corresponding `app.post("/login", ...)` route in your server instead of a second `app.get("/login")` route.

