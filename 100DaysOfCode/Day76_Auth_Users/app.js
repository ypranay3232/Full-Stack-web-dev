const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const path = require('path')

// add some middleware json and urlencoder
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'Public')))//now create a folder named Public

app.set("view engine","ejs")//we create a folder Views  --> inside create a file index.ejs and add tailwind
app.use(cookieParser())


app.get("/",(req,res)=>{
    // res.send("hello ")//when working with ejs we have to use render instead of send
    res.render("index.ejs")
})

app.listen(3000)