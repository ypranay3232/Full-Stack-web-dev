const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.urlencoded({ extended: false }))//enables to access body of html in forms


app.get('/', function (req, res) {
    res.send('<form action="/storeinput" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button</form>')
})

// now we use POST to send data from browser to client or vice versa.

app.post('/storeinput', function (req, res) {
    const UserName = req.body.username
    const filepath = path.join(__dirname, 'data', 'users.json')
    const fileData = fs.readFileSync(filepath)
    const existingusers = JSON.parse(fileData)
    existingusers.push(UserName)
    fs.writeFileSync(filepath, JSON.stringify(existingusers))
    res.send('<h1> User name Stored </h1>')

})

// now i want to add another route and display user names here, first we define route and read the file then we display the read file.
app.get('/users', function (req, res) {
    const filepath = path.join(__dirname, 'data', 'users.json')
    const fileData = fs.readFileSync(filepath)
    const existingusers = JSON.parse(fileData)

    //now if we go to the route (localhost:3000/users) we can see the routes.
    
    // instead of returning an array we return a list 
    let response = '<ul>'
    
    // remember we learnt a loop (for of to loop over arrays)
    for(const user of existingusers){
        response += '<li>' + user +'</li>'
    }
    response += '</ul>'
    res.send(response)//this should be at end else we get the array format of data.
})

app.listen(3000)