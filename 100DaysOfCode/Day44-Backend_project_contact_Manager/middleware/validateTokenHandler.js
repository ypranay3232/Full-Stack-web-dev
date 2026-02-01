const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const { decode } = require("punycode")

const validateToken = asyncHandler(async(req,res) =>{
    let token
    // we have to accept two possibilities 1) accepting token from header (adding a new field as "Authorization" and token) 2) passing the token in "auth field" inside bearer token inside thunderclient.
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split("")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("User is not authorized ")
            }
            req.body = decoded.user
            next()
        }) 
        if(!token){
            res.status(401)
            throw new Error("Error Token is missing in the request or User is not Authorized ")
        }
    }
})

module.exports = validateToken