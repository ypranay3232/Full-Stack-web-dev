const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Project")

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
    email:String,
    age:Number,
    //array of id's
    posts:[{ type:mongoose.Schema.Types.Objectid, ref:"post"}],
})
module.exports = mongoose.model('user',userSchema) 