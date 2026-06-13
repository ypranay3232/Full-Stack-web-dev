const mongoose = require('mongoose')
const config = require('config')
// learning how to use a debugger : npm i debug
const debgr = require('debug')("development:mongoose")

// also handling the error cases when nodejs wont connect with mongodb
mongoose.connect(`${config.get("MONGODB_URI")}/Ecommerce_store`)//localhost connection : changed to env variables
.then(function () { debgr("connected") })
.catch((err)=>{
    debgr(err);//this wont print anything until we set env variables. set DEBUG=development:*
})

module.exports = mongoose.connection