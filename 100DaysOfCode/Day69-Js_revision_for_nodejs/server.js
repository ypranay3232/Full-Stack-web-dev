// we also have another module http, is a protocol 

const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Hello world")
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});