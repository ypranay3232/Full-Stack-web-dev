const express = require('express');
const app = express();

// Import the user model to interact with the database
const userModel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("Hello World");
});

// CREATE: Add a new user
app.get("/create", async (req, res) => {
    const createdemp = await userModel.create({
        name: "firstemp",
        sal: 10000
    });
    // Send back the created document as a response
    res.send(createdemp);
});

// READ: Get all users
app.get("/read", async (req, res) => {
    // find() without arguments returns all documents in the collection
    const users = await userModel.find();
    res.send(users);
});

// UPDATE: Modify an existing user
app.get("/update", async (req, res) => {
    // findOneAndUpdate(condition, update, options)
    // { new: true } returns the modified document instead of the original one
    const updatedUser = await userModel.findOneAndUpdate(
        { name: "firstemp" }, 
        { sal: 15000 }, 
        { new: true }
    );
    res.send(updatedUser);
});

// DELETE: Remove a user
app.get("/delete", async (req, res) => {
    // findOneAndDelete(condition)
    const deletedUser = await userModel.findOneAndDelete({ name: "firstemp" });
    res.send(deletedUser);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});