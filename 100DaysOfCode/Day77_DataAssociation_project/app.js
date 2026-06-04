const express = require("express")
const app = express()
const userModel = require('./models/usermodel')
const cookieParser = require("cookie-parser")

// setting up middleware
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser ())

app.get("/",(req,res)=>{
    // res.send("working")
    res.render("index.ejs")
})

app.listen(3000)