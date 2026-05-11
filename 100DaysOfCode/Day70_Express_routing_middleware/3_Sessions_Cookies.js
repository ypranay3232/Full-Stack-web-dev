// start by downloading the cookie-parser (npm i cookie-parser)

// Cookies : when ever we do a task in server such as login or signup the server will forget the details of the user. So you have to login again and again. 

// so it works as : 
// when ever we do the login and exit from the app the server gets disconnected and it forgets who it was so to make the server remember us, we use a special token called session id. 

// so that session id will be shared on both the ends at server and at client side. so whenever we hit the www.site.com and when it routes to login page but (web browser/google chrome) will attach the session id with that request to server and server will identify us.


// and if we remove the session id from chrome settings, you will be asked to login again because the generated id and your current id wont watch. Thus you will be forced to logout


// What is a cookie : a cookie is nothing but data which is stored inside your browser storage, primarily used to keep user loggedin. but we can do various other things with it.

const express = require("express")
const app = express()

// here we use app.use before any route

app.use(express.json())//means we are using an middleware and that is express.json and urlencoder
app.use(express.urlencoded({extended: true}))

//express.json() makes the json data more readable 

// we use url encoded true because the data which is send to server is sent as "blob" --> unread able stream of data. now we have to convert the blob into readable format.  

app.get("/demo",(req,res)=>{
    res.send("hello")
})