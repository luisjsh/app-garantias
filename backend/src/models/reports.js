const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportsSchema = new Schema({
    issue: String,
    description: String,
    comments: String,
    createdAt: String,
    invoice: String,
    invoiceImage: [{
        id: String,
        path: String
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    personalinfo:{
        type: Schema.Types.ObjectId,
        ref: 'personalinfo'
    },
    device:{
        type: Schema.Types.ObjectId,
        ref:'device'
    } 
})

module.exports = mongoose.model('report', reportsSchema)