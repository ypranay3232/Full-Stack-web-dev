const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactmodel")
const { error } = require("console")
// @desk Get all contacts
// @route Get  api/contacts
//@access public

// const GetContact = asynchHandler(async(req, res) => {
//     // res.send("Get all contacts")
//     res.status(200).json({ message: "Get all contacts" })
// })

const GetContact = asyncHandler(async(req, res) => {
    // res.send("Get all contacts")
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

// @desk Create a contact
// @route POST  api/contacts
//@access public
const createcontact = asyncHandler(async(req, res) => {
    // res.send("Get all contacts")
    console.log("The request body is : ",req.body)
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory ")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact)
})

// @desk Get all contacts
// @route Get  api/contacts:id
//@access public
const getContacts = asyncHandler(async(req, res) => {
    // res.send("Get all contacts")
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})

// @desk Update all contacts
// @route PUT  api/contacts/:id
//@access public
const UpdateContacts = asyncHandler(async(req, res) => {
    // res.send("Get all contacts")
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("contact not found")
    }
    const UpdateContacts = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(UpdateContacts)
})

// @desk Delete  contacts
// @route Delete api/contacts/:id
//@access public
const DeleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    await contact.deleteOne() 
    res.status(200).json(contact)
})


module.exports = { GetContact, createcontact, getContacts, UpdateContacts, DeleteContact }