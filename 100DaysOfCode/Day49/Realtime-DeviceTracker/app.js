const express = require("express")
const path = require("path")
const app = express()
const socketio = require("socket.io")
const http = require("http")

const server = http.createServer(app)
const io = socketio(server)

// now setup view engine and tell express how to handle ejs
app.set("view engine", "ejs")
// this points to the current directory and a public folder
app.use(express.static(path.join(__dirname, "public")))

// handling the io() from script.js 
io.on("connection", function (socket) {
    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id);
    });
});

app.get('/', function (req, res) {
    res.render("index")
})

server.listen(3000)