const express = require('express')
const app = express()

const CookieParser  = require("cookie-parser")
const path = require('path')

const db = require("./config/mongoose-connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("initial setup")

})

app.listen(3000)