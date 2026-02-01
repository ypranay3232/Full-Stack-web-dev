const { timeStamp } = require("console")
const { Timestamp } = require("firebase/firestore/lite")
const mongoose = require("mongoose")
const { type } = require("os")

const contactschema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add the contact name"],
    },
    email:{
        type: String,
        required: [true, "Please enter the contact email address"],
    },
    phone:{
        type: String,
        required: [true, "please add the contact phone number"],
    },
},{
    Timestamp: true,
})

module.exports = mongoose.model("contact", contactschema)