const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deviceSchema = new Schema({
    model: String,
    brand: String,
    serialNumber: String,
    status: String,
    userAuthData:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    personalinfo: {
        type: Schema.Types.ObjectId,
        ref: 'personalinfo'
    }
})

module.exports = mongoose.model('device', deviceSchema)