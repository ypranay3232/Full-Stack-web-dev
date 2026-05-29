const express = require('express')
const app = express()

// importing the usermodel 
const userModel = require('./models/usermodel')

const cookieParser = require('cookie-parser')
const path = require('path')

// we add bcrypt to hash password 
const bcrypt = require('bcrypt')
const { hash } = require('crypto')

// Making login features via Token using JWT
const jwt = require('jsonwebtoken')

// add some middleware json and urlencoder
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'Public')))//now create a folder named Public

app.set("view engine", "ejs")//we create a folder Views  --> inside create a file index.ejs and add tailwind
app.use(cookieParser())


app.get("/", (req, res) => {
    // res.send("hello ")//when working with ejs we have to use render instead of send
    res.render("index.ejs")
})
// creating the user /creaTe route
app.post("/create", (req, res) => {

    // now we use bcrypt to hash password via generating salt(saltrounds, callback )the salt rounds determine the no of times the hashing iterates (ex: 10 = 2^10 = 1024), ad for hash it takes password,salt

    // to create a user we have to pull data from the req.body
    let { username, email, password, age } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            // we have to perform the user creation inside the salt 
            let CreatedUser = await userModel.create({
                username,
                email,
                // The password value is not password its hash.
                password: hash,
                age
            })

            // generating a token and sending it as a cookie to browser 
            let token = jwt.sign({email},"secretKey")
            res.cookie("token",token)

            res.send(CreatedUser)
        })
    })
})

// now after adding a cookie now we can access any kind of protected route we can access it 
app.get("/logout",(req,res)=>{
    res.cookie("token","")//clearing token
    res.redirect("/")
})

app.listen(3000)