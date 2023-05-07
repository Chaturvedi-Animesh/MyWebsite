const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName:{
        type : String
    },
    email:{
        type : String
    },
    password:{
        type : String
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User;