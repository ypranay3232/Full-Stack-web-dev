// @desk Get all contacts
// @route Get  api/contacts
//@access public

const GetContact = ((req, res) => {
    // res.send("Get all contacts")
    res.status(200).json({ message: "Get all contacts" })
})

// @desk Get all contacts
// @route POST  api/contacts
//@access public
const createcontact = (req, res) => {
    // res.send("Get all contacts")
    res.status(201).json({ message: "Create contact" })
}

// @desk Get all contacts
// @route Get  api/contacts:id
//@access public
const getContacts = (req, res) => {
    // res.send("Get all contacts")
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
}

// @desk Update all contacts
// @route PUT  api/contacts/:id
//@access public
const UpdateContacts = (req, res) => {
    // res.send("Get all contacts")
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}

// @desk Delete  contacts
// @route Delete api/contacts/:id
//@access public
const PostContacts = (req, res) => {
    // res.send("Get all contacts")
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}

module.exports = { GetContact, createcontact, getContacts, UpdateContacts, PostContacts }