const UserPersonalInfo = require('../../../models/userPersonalInfo')
const Report = require('../../../models/reports')
const Device = require('../../../models/device')
const User = require('../../../models/user')

module.exports = {
    userReports: async (parents, args, {isAuth, userId})=>{
        let user = await User.findById(userId)
            if (user.role == 'guest' || user.role == 'admin'){
                let report = await Report.find({user:user.id})
                        .populate('device', 'model brand serialNumber status pieces')
                        .populate('personalinfo', 'name dni address phoneNumber')
                    return report
            }
    },
    reports:async ()=>{
            let report = await Report.find()
                    .populate('device', 'model brand serialNumber status pieces')
                    .populate('personalinfo', 'name dni address phoneNumber')
                return report
    },
    report: async (parent, {id}, {isAuth, userId})=>{
        let report = await Report.findById(id)
            .populate('device', 'model brand serialNumber status pieces')
            .populate('personalinfo', 'name dni address phoneNumber')
        if(!report) return {message: "The report isnt in the db"}
        return report
    },
    reportsCondition: async (parent, args, {
                isAuth,
                userId
            }) => {
                if (!isAuth) return {
                    message: 'Not authenticated'
                }

                let {
                    conditions
                } = args

                if (conditions.length === 0) return {
                    message: 'no condition sent'
                }

                let i = 0;
                let mergedArray = []

                for (i = 0; i < conditions.length; i++) {
                    let dbResponse = await Device.find({
                        status: conditions[i].condition
                    })
                        .populate('report', 'issue comments description createdAt')
                        .populate('personalinfo', 'name dni address phoneNumber')

                    mergedArray = [...mergedArray, ...dbResponse]
                    }

                return {
                    device: mergedArray
                }
            }   
}