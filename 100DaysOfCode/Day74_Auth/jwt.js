const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.get("/",(req,res)=>{
    // we use jwt.sign() to store payload (data).. based on the token the email(payload) will be encrypted 
    let token = jwt.sign({email: 'demo@email.com'},"thisistoken")
    // nodemon jwt.js and visit localhost : we can see the token
    console.log(token);
    
    // so lets send this to browser 
    res.cookie("token",token)
    res.send("sent")//this line is req so that we can see something on the localhost page if its nothing what can we see
})

// we know that cookies are passed to each route so we can access the jwt at any route


// now we go the token to backend from user : now lets verify it
app.get("/read",(req,res)=>{
    if (!req.cookies || !req.cookies.token) {
        return res.status(400).send("No token found! Please visit '/' first to set the cookie.");
    }
    
    try {
        let data = jwt.verify(req.cookies.token, "thisistoken");
        console.log("Decoded Token Data:", data);
        res.send({
            message: "Token successfully verified!",
            decodedData: data
        });
    } catch (err) {
        console.error("Token Verification Failed:", err.message);
        res.status(401).send("Invalid or expired token: " + err.message);
    }
})

app.listen(3000, () => console.log("Server running on port 3000"))