const express = require('express')
const errorhandler = require('./middleware/errorhandler')
const { connect } = require('http2')
const connectDB = require('./config/dbconnection')
const dotenv = require("dotenv").config()

connectDB()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contact_routes"))
app.use(errorhandler)

app.listen(port, () => {
    console.log(`running on port ${port}`)
})
