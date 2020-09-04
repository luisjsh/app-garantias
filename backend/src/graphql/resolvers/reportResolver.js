const UserPersonalInfo = require('../../models/userPersonalInfo')
const Report = require('../../models/reports')
const Device = require('../../models/device')
const User = require('../../models/user')

module.exports = {
    userReports: async (args, req)=>{
        let user = await User.findById(req.userId)
            if (user.role == 'guest' || user.role == 'admin'){
                let report = await Report.find({user:user.id})
                        .populate('device', 'model brand serialNumber status')
                        .populate('personalinfo', 'name dni address phoneNumber')
                    return report
            }
    },
    reports:async (args, req)=>{
        let user = await User.findById(req.userId)
        if (user.role == 'admin'){
            let report = await Report.find()
                    .populate('device', 'model brand serialNumber status')
                    .populate('personalinfo', 'name dni address phoneNumber')
                return report
        }
    },
    report: async (args, req)=>{
        let {id} = args
        let report = await Report.findById(id)
            .populate('device', 'model brand serialNumber status')
            .populate('personalinfo', 'name dni address phoneNumber')
        return report
    }
}