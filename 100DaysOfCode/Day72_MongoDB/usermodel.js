const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/DBname");

// Schema defines the structure of the documents in our collection
const userSchema = mongoose.Schema({
    name: String,
    sal: Number   
});

// Create and export a model.
// Mongoose pluralizes the model name (e.g., "user" becomes "users" collection in DB)
module.exports = mongoose.model("user", userSchema);