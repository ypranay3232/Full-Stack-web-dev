const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const { generateToken } = require("../utils/generateToken")

module.exports.registerUser = async (req, res) => {
    try {
        let { email, password, fullname } = req.body
        
        let user = await userModel.findOne({ email })
        if (user) {
            req.flash("error", "You already have an account, please login.")
            return res.redirect("/")
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        let createdUser = await userModel.create({
            email,
            password: hashedPassword,
            fullname
        })

        let token = generateToken(createdUser)
        res.cookie("token", token, { path: "/", httpOnly: true, secure: process.env.NODE_ENV === "production" })
        res.redirect("/shop")
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/")
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email })
        if (!user) {
            req.flash("error", "Email or Password incorrect")
            return res.redirect("/")
        }

        let result = await bcrypt.compare(password, user.password)
        if (result) {
            let token = generateToken(user)
            res.cookie("token", token, { path: "/", httpOnly: true, secure: process.env.NODE_ENV === "production" })
            res.redirect("/shop")
        } else {
            req.flash("error", "Email or Password incorrect")
            return res.redirect("/")
        }
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/")
    }
}

module.exports.logout = async (req, res) => {
    res.cookie("token", "", { path: "/", expires: new Date(0) })
    res.redirect("/")
}
