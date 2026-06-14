const express = require("express")
const router = express.Router()
const ownerModel = require("../models/owner-model")
const productModel = require("../models/product-model")

// first we check the environment if we have defined any if not we define the environment : 
console.log(process.env.NODE_ENV)//run nodemon. if its undefined we set up to development env, so set NODE_ENV=development. and if we run again we get development (npm run dev)

if (process.env.NODE_ENV == "development") {
    router.post("/create", async (req, res) => {
        let owners = await ownerModel.find()
        if (owners.length > 0) {
            return res.status(503).send("you dont have the permission to create a new owner")
        }

        let {fullname, email,password} = req.body
        let createdowner = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(201).send(createdowner)
    })
}

router.get("/admin", (req, res) => {
    let success = req.flash("success")
    let error = req.flash("error")
    res.render("create", { success, error })
})

router.get("/products", async (req, res) => {
    try {
        let products = await productModel.find()
        let success = req.flash("success")
        let error = req.flash("error")
        res.render("owner-products", { products, success, error })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.get("/", (req, res) => {
    res.send("is it working ?")
})

module.exports = router