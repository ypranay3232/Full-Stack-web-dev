// Backend introduction :

const username = "demo"
console.log(username)

// creating a server with node js 

// const http = require('http')

// function handlereq(req,res){
//     res.statusCode = 200
//     res.end("This is the end message response sent to client ! ")
// }
// const server = http.createServer(handlereq)
// server.listen(3000)

// displaying the current date time in the server
const http = require('http')

function handlereq(req,res){
    if(req.url == '/currentime'){ //if request is localhost : 3000/currenttime
        res.statusCode = 200//accept the data and respond with current date time
        res.end('<h2>' + new Date().toISOString() + '</h2')
    }else if(req.url == '/'){ //else if requesting url is localhost : 3000 then display hello world
        res.statusCode = 200
        res.end("hello world")
    }
}
const server = http.createServer(handlereq)
server.listen(3000)