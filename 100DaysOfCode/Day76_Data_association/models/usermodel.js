const mongoose = require('mongoose')

// connect the mongodb and create a schema
mongoose.connect("mongodb://127.0.0.1:27017/TestDB1")


const userschema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    // whenever we create a post we store them here in array, it contains id's from postmodel 
    posts: Array

})

module.exports = mongoose.model('user',userschema)