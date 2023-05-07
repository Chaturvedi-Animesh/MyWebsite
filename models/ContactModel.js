const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    firstName:{
        type : String
    },
    lastName:{
        type : String
    },
    email:{
        type : String
    },
    mobile:{
        type : Number
    },
    message:{
        type : String
    }
})

const Contact = mongoose.model('Contact', ContactSchema)
module.exports = Contact;