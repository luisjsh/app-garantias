const UserPersonalInfo = require('../../models/userPersonalInfo')
const Report = require('../../models/reports')
const Device = require('../../models/device')
const User = require('../../models/user')

module.exports = {
    Reports: async (args, req)=>{
        let user = await User.findById(req.userId)
       if (user.role == 'guest' || user.role == 'admin'){
        let report = await Report.find({userAuthData:user.id})
            .populate('device', 'model brand serialNumber status')
            .populate('creator', 'email username')
            return report
       }
    }
}