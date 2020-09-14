const UserPersonalInfo = require('../../../models/userPersonalInfo')
const Report = require('../../../models/reports')
const Device = require('../../../models/device')
const User = require('../../../models/user')

module.exports = { 
    setNewStatus: async (parents, args, {isAuth, userId})=>{
        let user = await User.findById(userId)
        if(user.role !== 'guest'){
        let {id, reportid, status} = args
        let device = await Device.updateOne({_id: id}, {$set: {status: status}})
        return await Report.findById(reportid)
            .populate('device', 'model brand serialNumber status')
            .populate('personalinfo', 'name dni address phoneNumber')}
    }
}