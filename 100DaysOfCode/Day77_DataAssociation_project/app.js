const express = require("express")
const app = express()
const userModel = require('./models/usermodel')
const cookieParser = require("cookie-parser")
const usermodel = require("./models/usermodel")
const bcrypt = require('bcrypt')

// setting up middleware
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser ())

app.get("/",(req,res)=>{
    // res.send("working")
    res.render("index.ejs")
})

// Register/ account creation route
app.post("/Register",async (req,res)=>{

    // destructuring : unpacking all items from req.body
    let {username, name, password,email,age} = req.body
    // check if an account exist with the mail 
    let user = await usermodel.findOne({email})
    if(user) return res.status(500).send("User already registered")
    // hashing the password using bcrypt 

    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password, salt, async(err, hash)=>{
            let user = await usermodel.create({
                username,
                name,
                password:hash,
                email,
                age
            })
        })
    })
})

app.listen(3000)