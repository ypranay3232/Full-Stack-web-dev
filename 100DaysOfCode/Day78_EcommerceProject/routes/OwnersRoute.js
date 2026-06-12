const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("is it working ?")
})

module.exports = router