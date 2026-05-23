const express = require('express')

// to use cookies
const cookieParser = require('cookie-parser')
// to use bcrypt 
const bcrypt = require('bcrypt')
const app = express()

app.use(cookieParser())


// to setup cookie we use cookie(which takes key values) 
app.get("/",(req,res)=>{
    // res.send("hello")
    res.cookie("name", "user1")
    res.cookie("role", "admin") // set a different cookie instead of overwriting
    // now we send the cookie 
    res.send("sent cookies (name=user1, role=admin)")
})

// A cookie will automatically be sent to other routes. 
app.get("/loginpage",(req,res)=>{
    // because cookies are sent to all routes we can read them using cookie parser 
    console.log(req.cookies)
    res.send(`from login page. Received cookies: ${JSON.stringify(req.cookies)}`)
})
// bcrypt works as : so first we create a salt(a string )then we create a hash which helps to secure the password then we mix the salt and hash. so the password can never be decrypted

app.get("/salt",(req,res)=>{
    bcrypt.genSalt(10,(err,salt)=>{
        if (err) return res.status(500).send("Error generating salt");
        bcrypt.hash("hello password",salt,(err,hash)=>{
            if (err) return res.status(500).send("Error hashing password");
            // this generated hash can be stored in db
            console.log("Salt:", salt); 
            console.log("Hash:", hash);
            // Send response back so request does not hang!
            res.send(`<h3>Bcrypt Generation Successful!</h3>
                      <p><b>Salt:</b> ${salt}</p>
                      <p><b>Hash:</b> ${hash}</p>
                      <p>Check your console to see the values logged.</p>`);
        })
    })
})

app.listen(3000)
