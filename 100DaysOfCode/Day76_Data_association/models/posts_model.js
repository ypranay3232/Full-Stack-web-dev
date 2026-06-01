const mongoose = require('mongoose')

// connect the mongodb and create a schema


const postSchema = mongoose.Schema({
    postData:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        // The post is for usermodel so 
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('post',postSchema)