const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user:{
         type:mongoose.Schema.Types.Objectid, ref:"post",
         ref:"user"
        },
    content: string,
    likes: [
        {type:mongoose.Schema.Types.ObjectId, ref:"user"}
    ]
})
module.exports = mongoose.model('user',userSchema) 