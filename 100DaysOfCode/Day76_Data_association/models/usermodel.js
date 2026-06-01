const mongoose = require('mongoose')

// connect the mongodb and create a schema
mongoose.connect("mongodb://127.0.0.1:27017/TestDB1")


const userschema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    // whenever we create a post we store them here in array, it contains id's from postmodel 
    posts: [
        // defining the posts type as ID inside an array (.i.e so post is an array of id's) 
        {type: mongoose.Schema.Types.ObjectId,
        // the id's belong to usermodel 
            ref:'post'
        }
        
    ]

})

module.exports = mongoose.model('user',userschema)