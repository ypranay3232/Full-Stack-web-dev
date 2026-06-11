const mongoose = require('mongoose')

// also handling the error cases when nodejs wont connect with mongodb
mongoose.connect("mongoose://127.0.0.1:27017/Ecommerce_Store")//localhost connection
.then(function () { console.log("connected") })
.catch((err)=>{
    console.log(err);
})

module.exports = mongoose.connection