const express = require('express')
const app = express()
const path = require('path')
// importing user model
const UserModel = require("./Models/user")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

// now we create another route (read.ejs) after we wrote some basic name,email,image url in index.ejs. where we create a basic image layout 
app.get("/read",async(req,res)=>{

    // now here we read user after entering user details (.i.e after handling post)
    let allUsers = await UserModel.find()
    res.render("read.ejs",{users: allUsers})
})

// now after adding form actions we use post 
app.post("/Create",async (req,res)=>{
    // now we create user models
    
    // first we destructure the variables from req.body 
    let {name,email,image} = req.body 
    let createdUser = await UserModel.create({
        name,
        image,
        email
    })
    // now send it back 
    res.redirect("/read")
})
app.get("/delete/:id", async (req, res) => {
    let users = await UserModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.get("/edit/:id", async (req, res) => {
    let user = await UserModel.findOne({_id: req.params.id})
    res.render("edit.ejs", {user})
})

app.post("/update/:id", async (req, res) => {
    let {name, email, image} = req.body
    let user = await UserModel.findOneAndUpdate({_id: req.params.id}, {name, email, image}, {new: true})
    res.redirect("/read")
})

app.listen(3000)