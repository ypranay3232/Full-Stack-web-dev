const express = require('express')
const router = express.Router()
const {GetContact, createcontact, getContacts, UpdateContacts, DeleteContact} = require("../controllers/contactController")

// configure the router to route 
router.route('/').get(GetContact).post(createcontact)

router.route('/:id').get(getContacts).put(UpdateContacts).delete(DeleteContact)

//now export the router 
module.exports = router