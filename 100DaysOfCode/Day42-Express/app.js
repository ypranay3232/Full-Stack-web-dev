// const express = require('express')

// const app = express()

// app.get('/currenttime',function(req,res) {
//     res.send('<h1>' + new Date().toISOString() + '</h1>')
// })

// // here we dont use if else we just define another route
// app.get('/',function(req,res){
//     res.send('<h1> Hello World</h1>')
// }) 

// app.listen(3000)


//now create a server that takes input and stores the input in a file 
// const express = require('express')

// const app = express()
// app.use(express.urlencoded({extended: false}))

// app.get("/",function (req,res){
// res.send('<form action="/storeinput" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button</form>')
// })

// app.post('/storeinput',function(req,res){
//     const usernames = req.body.username
//     console.log(usernames)
//     res.send('<h1>Username stored </h1>')
// })

// app.listen(3000)

//now store the files 
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
app.use(express.urlencoded({extended: false}))

app.get("/",function (req,res){
res.send('<form action="/storeinput" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button</form>')
})

app.post('/storeinput',function(req,res){
    const usernames = req.body.username
    // first we construct a file path then we read the path.
    const filepath = path.join(__dirname,'data','users.json')
    // read the file 
    const fileData = fs.readFileSync(filepath)
    //even though the users.json is a empty array but its treated as text that contains square braces so to make it work we do as :
    const existingusers = JSON.parse(fileData)//future me; i parsed filepath which resulted in error. 

    existingusers.push(usernames)

    fs.writeFileSync(filepath,JSON.stringify(existingusers))
    res.send('<h1>Username stored </h1>')
})

app.listen(3000)