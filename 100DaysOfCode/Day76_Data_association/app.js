const express = require('express')
const app = express()
const usermodel = require('./models/usermodel')
const postmodel = require('./models/posts_model')
const { useImperativeHandle } = require('react')

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

app.listen(3000)