const express = require("express")
const userModel = require("../models/user-model")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("hello ")
})


router.post("/register", async (req, res) => {
    try {
        let { email, password, fullname } = req.body
        let user = await userModel.create({
            // the issue with mongodb is even if we dont provide email,password,fullname we can still create user. we can have issues like in above line we defined let{email,password,fullname} if we skip email and define it below here our server will crash. so use try catch.
            email, password, fullname
        })
        res.send(user)
    }catch(err){
        console.log(err.message);        
    }

})

module.exports = router