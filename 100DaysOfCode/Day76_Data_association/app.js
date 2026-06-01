const express = require('express')
const app = express()
const usermodel = require('./models/usermodel')
const postmodel = require('./models/posts_model')

app.get("/",(req,res)=>{
    res.send("hello ")
})
app.get("/create",async(req,res)=>{
    let user = await usermodel.create({
        username:"test1",
        email:"demo@gmail.com",
        age:25
    })
    res.send(user)
})
app.get("/post/create",async(req,res)=>{
    let post = await postmodel.create({
        postData: "hello world",
        // do /create and you get a user id paste it here 
        user : "6a1d0323140f471a04982608"
    })

    // now we have to inform the user that a user is created.
    let user = await usermodel.findOne({_id:"6a1d0323140f471a04982608"})
    // now push this id into user post array 
    user.posts.push(post._id)
    await user.save()  
    res.send({post,user})
})

app.listen(3000)