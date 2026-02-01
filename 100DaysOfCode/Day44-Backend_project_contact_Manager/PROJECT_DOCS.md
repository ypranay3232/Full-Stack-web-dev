# Contact Manager Backend - Complete Developer Guide

This guide provides a comprehensive, professional walkthrough to build a production-ready Contact Manager Backend.

> **Note:** This documentation provides the **corrected and optimized** version of the code. It fixes several bugs found in the original implementation (such as typos, missing middleware arguments, and logic errors) to ensure the application runs perfectly.

## 📋 Prerequisites

- **Node.js** installed.
- **VS Code** (or any code editor).
- **MongoDB Atlas** account.
- **Thunder Client** or **Postman**.

---

## 🚀 Phase 1: Project Initialization

### 1. Initialize the Project

```bash
mkdir my-backend-project
cd my-backend-project
npm init -y
```

### 2. Install Dependencies

```bash
npm install express nodemon dotenv mongoose bcrypt jsonwebtoken express-async-handler
```

### 3. Configure Scripts

In `package.json`, update `scripts`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
},
```

### 4. Setup Environment Variables

Create `.env`:

```env
PORT=5001
CONNECTION_STRING=mongodb+srv://admin:<password>@cluster.mongodb.net/mycontacts-backend?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET=MySuperSecretKey123
```

_(Replace `<password>` with your actual MongoDB password)_

---

## � Phase 2: Building the Express Server

### 1. Create `server.js`

This is the entry point. We use standard practices for middleware and routing.

```javascript
const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// Connect to Database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parses JSON body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Handler (Must be last)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

---

## 🛡 Phase 3: Middleware & Error Handling

### 1. Constants

Create `constants.js` to avoid magic numbers.

```javascript
exports.constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
```

### 2. Global Error Handler

Create `middleware/errorHandler.js`.
_> Fixed: Corrected typos `statescode` -> `statusCode` and handling case sensitivity._

```javascript
const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("No Error, All good!");
      break;
  }
};

module.exports = errorHandler;
```

---

## 💾 Phase 4: Database Configuration

### 1. DB Connection

Create `config/dbConnection.js`.

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

## 🧠 Phase 5: Models & Contacts API

### 1. Contact Model

Create `models/contactModel.js`.
_> Update: Added `user_id` to associate contacts with specific users._

```javascript
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Contact", contactSchema);
```

### 2. Contact Controller

Create `controllers/contactController.js`.
_> Fixed: Use `deleteOne()` instead of deprecated `remove()`, and ensured strict camelCase naming._

```javascript
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

// @desc Create new contact
// @route POST /api/contacts
// @access Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

// @desc Get individual contact
// @route GET /api/contacts/:id
// @access Private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // Check permission
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.status(200).json(updatedContact);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  await contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
```

### 3. Contact Routes

Create `routes/contactRoutes.js`.

```javascript
const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // Protect all routes

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
```

---

## 🔐 Phase 6: User Authentication

### 1. User Model

Create `models/userModel.js`.

```javascript
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
```

### 2. Auth Middleware

Create `middleware/validateTokenHandler.js`.
_> Fixed: Added `next` parameter, fixed split logic (`split(" ")`), and correct `req.user` assignment._

```javascript
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    // Extract token from "Bearer <token>"
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
  }
});

module.exports = validateToken;
```

### 3. User Controller

Create `controllers/userController.js`.

```javascript
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Register a user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

// @desc Current user info
// @route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
```

### 4. User Routes

Create `routes/userRoutes.js`.

```javascript
const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
```

---

## 🎉 Conclusion

If you followed this guide, you now have a professional, bug-free, and secure backend API. Unlike the raw notes, this version includes:

- **Relationship support**: Contacts are linked to specific users.
- **Robust Error Handling**: Fixed typos and logic issues.
- **Secure Authentication**: Correctly implemented JWT middleware.
