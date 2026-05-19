// install mongoose 
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/anydb")

// now creating a user schema 

const UserSchema = mongoose.Schema({
    // we need username, email and image url so we add those 
    image: String,
    email: String,
    name:String
})

// now export the model and import it in app.js
module.exports = mongoose.model("User", UserSchema)