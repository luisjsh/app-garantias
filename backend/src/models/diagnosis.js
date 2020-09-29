const mongoose = require('mongoose')
const Schema = mongoose.Schema

const diagnosisSchema = new Schema({
    reportid: String,
    diagnosis: String,
    actionsCorrective: String,
    actionsAditional: String,
    testResults:{},
    biosVersion: String,
    operativeSystem:String,
    accesories: {},
    recomendations: {}
})

module.exports = mongoose.model('diagnosis', diagnosisSchema)