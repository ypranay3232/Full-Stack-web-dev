const express = require("express")
const router = express.Router()
const multer = require("multer")
const productModel = require("../models/product-model")

const upload = multer({ storage: multer.memoryStorage() })

router.post("/create", upload.single("image"), async (req, res) => {
    try {
        let { name, price, discount, bgcolor, placeholder, textcolor } = req.body
        
        if (!req.file) {
            req.flash("error", "Please upload a product image.")
            return res.redirect("/owners/admin")
        }

        let product = await productModel.create({
            image: req.file.buffer.toString("base64"),
            name,
            price,
            discount,
            bgcolor,
            placeholder,
            textcolor
        })

        req.flash("success", "Product created successfully!")
        res.redirect("/owners/admin")
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/owners/admin")
    }
})

router.get("/delete/:id", async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id)
        req.flash("success", "Product deleted successfully!")
        res.redirect("/owners/products")
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/owners/products")
    }
})

router.get("/", (req, res) => {
    res.send("is it working ?")
})

module.exports = router