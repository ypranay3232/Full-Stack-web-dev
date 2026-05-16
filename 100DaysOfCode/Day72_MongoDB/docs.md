# MongoDB and Mongoose Basics (CRUD Operations)

This document explains the basic setup and implementation of CRUD (Create, Read, Update, Delete) operations using Node.js, Express, MongoDB, and Mongoose.

## 1. Setup & Installation

Before writing the code, ensure MongoDB is installed on your system and the environment variables are set up.

Initialize a new Node.js project:
```bash
npm init -y
```

Install the required packages:
```bash
npm i express mongoose
```
- **express**: Web framework for Node.js to create the server and routes.
- **mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It helps to communicate with the MongoDB database server using structured schemas.

## 2. Defining the Model (`usermodel.js`)

Mongoose uses **Schemas** to define the structure of data in a database collection, and **Models** to provide an interface for interacting with that database collection.

```javascript
const mongoose = require("mongoose");

// Connect to MongoDB locally
// Replace 'DBname' with your desired database name
mongoose.connect("mongodb://127.0.0.1:27017/DBname");

// Schema is a structure defining what data each user will contain
const userSchema = mongoose.Schema({
    name: String, // Note: Use capital 'S' for String in Mongoose Schema
    sal: Number   // Note: Use capital 'N' for Number
});

// Create a model (a template to perform CRUD operations)
// Mongoose automatically pluralizes the model name (e.g., 'user' becomes the 'users' collection)
module.exports = mongoose.model("user", userSchema);
```

## 3. Server and CRUD Operations (`app.js`)

In the main application file, we create an Express server and define routes to perform CRUD operations using the imported Mongoose model. Since database operations take time, we use `async/await` to wait for the results.

```javascript
const express = require('express');
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("Hello World");
});

// CREATE: Add a new document to the database
app.get("/create", async (req, res) => {
    const createdemp = await userModel.create({
        name: "firstemp",
        sal: 10000
    });
    res.send(createdemp);
});

// READ: Fetch documents from the database
app.get("/read", async (req, res) => {
    const users = await userModel.find(); // Returns an array of all users
    res.send(users);
});

// UPDATE: Modify an existing document
app.get("/update", async (req, res) => {
    // findOneAndUpdate takes three arguments:
    // 1. Filter condition to find the document
    // 2. Data to update
    // 3. Options (e.g., { new: true } returns the updated document)
    const updatedUser = await userModel.findOneAndUpdate(
        { name: "firstemp" }, 
        { sal: 15000 }, 
        { new: true }
    );
    res.send(updatedUser);
});

// DELETE: Remove a document from the database
app.get("/delete", async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({ name: "firstemp" });
    res.send(deletedUser);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

## 4. Running the Application

Start the server using `nodemon` or `node`:
```bash
nodemon app.js
```

You can now test the CRUD operations by visiting the routes in your browser:
- `http://localhost:3000/create` (Creates a user)
- `http://localhost:3000/read` (Reads all users)
- `http://localhost:3000/update` (Updates the user)
- `http://localhost:3000/delete` (Deletes the user)
