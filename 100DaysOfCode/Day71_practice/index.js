const express = require("express")
const app = express()
const path = require('path')

// Now we mount middleware functions here : these are parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// setting up ejs 
app.set('view engine', 'ejs')//backend will render ejs from now on. create a "views" folder and setup a index.ejs file  --> now we can easily use res.render and pass a file  ex: 


// setting up static pages: create a new folder named public --> images,stylesheet, js
app.use(express.static(path.join(__dirname,'public')))//means to get static files go to public


// dynamic routing : we use ':' to access dynamic routing 
app.get("/profile/:username",(req,res)=>{
    res.send(`hello user, ${req.params.username} `)
})

app.get("/view",(req,res)=>{
    res.render("index.ejs")
})

// now we setup the route
app.get("/",(req,res)=>{
    res.send("hello... its working")
})

app.listen(3000, ()=>{
    //console this message whenever we start the server. (npx nodemon index.js)
    // now go to localhost:3000
    console.log("its working");
    
})