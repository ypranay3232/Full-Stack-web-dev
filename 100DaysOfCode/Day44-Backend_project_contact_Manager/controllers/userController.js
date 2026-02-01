const asyncHandler = require("express-async-handler")
const bcrypt  = require("bcrypt")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
// @desk Register a user
// @route POST /api/users/register
//@access public

// const GetContact = asynchHandler(async(req, res) => {
//     // res.send("Get all contacts")
//     res.status(200).json({ message: "Get all contacts" })
// })

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const useravailable = await User.findOne({ email })
    if (useravailable) {
        res.status(400)
        throw new Error("User already registered")
    }
    // crating a hash password
    const hashpassword = await bcrypt.hash(password,10)
    console.log("hashed password : ", hashpassword)
    const user = await User.create({
        username,
        email,
        password: hashpassword,
    })
    console.log(`User Created ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({ message: "Register the user" })
})

// @desk Login user
// @route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    // whenever a user is sending a email with password 
    const {email,password} = req.body
    // we check if we dont have any fields we throw error
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    // check if the user is in DB or not ? 
    const user = await User.findOne({email})
    // now compare the password with hashpassword if both matches provide JWT token
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
    // now provide a access token secret just define one in .env
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "10m"}
    )
        res.status(200).json({accessToken})
    }else{
        // now pass this as response 
        res.status(401)
        throw new Error("email or password is not valid")
    }
})

// @desk current user info
// @route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user information" })
})


module.exports = { registerUser, loginUser, currentUser }