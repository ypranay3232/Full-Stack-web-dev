const express = require("express")
const router = express.Router()
const userModel = require("../models/user-model")
const productModel = require("../models/product-model")
const isLoggedIn = require("../middlewares/isLoggedIn")

router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.user.email })
        user.cart.push(req.params.productid)
        await user.save()
        req.flash("success", "Product added to cart!")
        res.redirect("/shop")
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/shop")
    }
})

router.get("/removefromcart/:productid", isLoggedIn, async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.user.email })
        let index = user.cart.indexOf(req.params.productid)
        if (index > -1) {
            user.cart.splice(index, 1)
            await user.save()
        }
        req.flash("success", "Product removed from cart!")
        res.redirect("/users/cart")
    } catch (err) {
        res.redirect("/users/cart")
    }
})

router.get("/cart", isLoggedIn, async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.user.email })
        
        let cartItems = []
        for (let itemId of user.cart) {
            let product = await productModel.findById(itemId)
            if (product) {
                cartItems.push(product)
            }
        }

        let success = req.flash("success")
        let error = req.flash("error")
        res.render("cart", { user, cartItems, success, error })
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.get("/", (req, res) => {
    res.send("is it working ?")
})

module.exports = router