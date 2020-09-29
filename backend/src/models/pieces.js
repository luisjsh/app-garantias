const mongoose = require('mongoose')
const Schema = mongoose.Schema

const piecesSchema = new Schema({
    diagnosis: String,
    issue: String,
    link: String
})

module.exports = mongoose.model('pieces', piecesSchema)