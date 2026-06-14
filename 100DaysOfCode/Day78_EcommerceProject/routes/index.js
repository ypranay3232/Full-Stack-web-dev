const express = require("express")
const router = express.Router()
const productModel = require("../models/product-model")
const isLoggedIn = require("../middlewares/isLoggedIn")
const authController = require("../controllers/authController")

router.get("/", (req, res) => {
    if (req.cookies.token && req.cookies.token !== "") {
        return res.redirect("/shop")
    }
    let error = req.flash("error")
    res.render("index", { error, loggedin: false })
})

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.get("/logout", isLoggedIn, authController.logout)

router.get("/shop", isLoggedIn, async (req, res) => {
    try {
        let products = await productModel.find()
        let success = req.flash("success")
        let error = req.flash("error")
        res.render("shop", { products, success, error, user: req.user })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router