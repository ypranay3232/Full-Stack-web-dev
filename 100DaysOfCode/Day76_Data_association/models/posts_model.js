const mongoose = require('mongoose')

// connect the mongodb and create a schema


const postSchema = mongoose.Schema({
    postData:String,
    user:String,
    date:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('post',postSchema)