require("dotenv").config()
const express = require('express')
const app = express()

const CookieParser  = require("cookie-parser")
const path = require('path')
const expressSession = require("express-session")
const flash = require("connect-flash")

const db = require("./config/mongoose-connection")
const OwnersRoute = require("./routes/OwnersRoute")
const ProductsRoute = require("./routes/ProductsRoute")
const UsersRoute = require("./routes/UsersRoute")
const indexRouter = require("./routes/index")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET || "sessionsecretkey123",
    })
)
app.use(flash())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/", indexRouter)
app.use("/owners",OwnersRoute)
app.use("/users",UsersRoute)
app.use("/products",ProductsRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})