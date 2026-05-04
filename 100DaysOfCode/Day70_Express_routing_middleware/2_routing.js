const express = require('express')
const app = express()
// first we import the express into express then assign it to app. Now we can can create routes: routes are nothing more than pages we can navigate to multiple pages via routing.

// the get syntax is as follow : route, requestHandler
app.get("/",(req,res)=>{
    res.send("At the Home page");
})

// now we create the get for another route ex: /dashboard
app.get("/Dashboard",(req,res)=>{
    res.send("inside Dashboard page")
})


app.listen(3000)