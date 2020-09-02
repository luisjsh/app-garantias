const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userPersonalInfoSchema = new Schema({
    name: String,
    dni: String,
    address: String,
    phoneNumber: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('personalinfo', userPersonalInfoSchema)