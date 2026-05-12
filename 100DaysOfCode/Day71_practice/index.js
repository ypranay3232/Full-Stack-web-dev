const express = require("express")
const app = express()

// Now we mount middleware functions here : these are parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// setting up ejs 
app.set(' view engine ', 'ejs')//backend will render ejs from now on. create a "views" folder and setup a index.ejs file  --> now we can easily use res.render and pass a file  ex: 

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