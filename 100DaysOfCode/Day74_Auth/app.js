const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())


// to setup cookie we use cookie(which takes key values) 
app.get("/",(req,res)=>{
    // res.send("hello")
    res.cookie("name", "user1")
    res.cookie("name", "user2")
    // now we send the cookie 
    res.send("sent cookies")
})

// A cookie will automatically be sent to other routes. 
app.get("/loginpage",(req,res)=>{
    res.send("from login page")
    // because cookies are sent to all routes we can read them using cookie parser 
    console.log(req.cookies)
})

app.listen(3000)
