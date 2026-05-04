// Express js is officially categories as a framework though its installed and distributed via npm package 

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(3000)