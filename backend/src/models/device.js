const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deviceSchema = new Schema({
    model: String,
    brand: String,
    serialNumber: String,
    status: String,
    userAuthData: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    personalinfo: {
        type: Schema.Types.ObjectId,
        ref: 'personalinfo'
    },
    report: {
        type: Schema.Types.ObjectId,
        ref: 'report'
    },
    diagnosis: {
        type: Schema.Types.ObjectId,
        ref: 'diagnosis'
    },
    pieces: [{
        id: String,
        name: String,
        status: String,
        issue: String,
        link: String
     }]
})

module.exports = mongoose.model('device', deviceSchema)