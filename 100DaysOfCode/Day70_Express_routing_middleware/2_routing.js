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



// Middleware : okay lets see this with an example : when search for something such as : a wallpaper from unsplash.com then we think that "we request a image and we get routed to the server and we get a responses"

// but in reality we have one more thing : Middleware --> so when ever we send a request a middleware will take that and forward to routes and return response. in simple terms we can have it to have a quick check as "confirm you are robot kinda stuff" so middleware is something that do a operation then proceeds to route. 

// To implement middleware there are two ways 1) app.use(req,res,next) : before any app.get()

// so first app.use() will run before /profile, and now we move the request forward by using next() but for best practices we use error handling approaches here 
app.use((err,req,res,next)=>{
    console.log("middleware is here ");//we can see this in terminal if we run this with "nodemon filename"
    next()
    // error handling is done at last so we can counter any issues
    res.status(500).send("something went wrong")
})
app.get("/profile",(req,res)=>{
    res.send("inside profile")
})

app.listen(3000)