const express = require('express')
const router = express.Router()

const userPersonalInfo = require('../models/userPersonalInfo')
const report = require('../models/reports')
const device = require('../models/device')
const User = require('../models/user')

const Auth = require('../middleware/auth')
const currentDate = require('../services/setActualDate')

router.post('/report-upload', Auth, async (req,res)=>{
    let user = await User.findById(req.userId)
    if(user.role == 'guest' || user.role == 'admin'){
    let {name, dni, address, phoneNumber, brand, model, status, serialNumber, issue, comments, description, invoiceNumber} = req.body

    if(
        name.length == 0 ||
        dni.length == 0 ||
        address.length == 0 ||
        phoneNumber.length == 0 ||
        brand.length == 0 ||
        model.length == 0 ||
        status.length == 0 ||
        serialNumber.length == 0 ||
        issue.length == 0 ||
        comments.length == 0 ||
        description.length == 0 ||
        invoiceNumber.length == 0
    ) return res.status(404).json({status: 404})
    
    

    let imageArray = []

    for (let i=0; i<req.files.length; i++){
        imageArray = [...imageArray, {id:i, path: `/img/uploads/${req.files[i].filename}`}]
    }
    
    let userData = new userPersonalInfo({
        name,
        dni,
        address,
        phoneNumber,
        user: user.id
    })
    userData.save()

    let deviceData = new device({
        brand,
        model,
        serialNumber,
        status,
        user: user.id,
        personalinfo: userData.id,
        report: false
    })

    let reportData = new report({
        issue,
        description,
        comments,
        createdAt: currentDate(),
        invoice: invoiceNumber,
        invoiceImage: imageArray,
        user: user.id,
        personalinfo: userData.id,
        device: deviceData.id
    })
    
    deviceData.report = reportData.id

    deviceData.save()

    reportData.save()
    
    deviceData.owner = user

    return res.status(200).json({status: 200})
    }
   
    else return res.status(404)
})

module.exports = router