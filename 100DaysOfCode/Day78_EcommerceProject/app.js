const express = require('express')
const app = express()

const CookieParser  = require("cookie-parser")
const path = require('path')

const db = require("./config/mongoose-connection")
const OwnersRoute = require("./routes/OwnersRoute")
const ProductsRoute = require("./routes/ProductsRoute")
const UsersRoute = require("./routes/UsersRoute")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/owners",OwnersRoute)
app.use("/users",UsersRoute)
app.use("/products",ProductsRoute)

app.listen(3000)