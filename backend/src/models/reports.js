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
    userAuthData:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    userPersonalInfo:{
        type: Schema.Types.ObjectId,
        ref: 'userPersonalInfo'
    },
    device:{
        type: Schema.Types.ObjectId,
        ref:'device'
    } 
})

module.exports = mongoose.model('report', reportsSchema)