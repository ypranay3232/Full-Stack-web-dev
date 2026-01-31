const express = require('express')
const router = express.Router()
const {GetContact, createcontact, getContacts, UpdateContacts, PostContacts} = require("../controllers/contactController")

// configure the router to route 
router.route('/').get(GetContact).post(createcontact)

router.route('/:id').get(getContacts).put(UpdateContacts).delete(PostContacts)

//now export the router 
module.exports = router