const UserPersonalInfo = require('../../../models/userPersonalInfo')
const Report = require('../../../models/reports')
const Device = require('../../../models/device')
const User = require('../../../models/user')
const Diagnosis = require('../../../models/diagnosis')
const Pieces = require('../../../models/pieces')

module.exports = {
    setNewStatus: async (parents, args, {
        isAuth,
        userId
    }) => {
        let user = await User.findById(userId)
        if (user.role !== 'guest') {
            let {
                id,
                reportid,
                status
            } = args
            let device = await Device.updateOne({
                _id: id
            }, {
                $set: {
                    status: status
                }
            })
            return await Report.findById(reportid)
                .populate('device', 'model brand serialNumber status')
                .populate('personalinfo', 'name dni address phoneNumber')
        }
    },
    setDiagnosis: async (parents, args, {
        isAuth,
        userId
    }) => {
        if (!isAuth) return {
            message: 'Not authenticated'
        }
        let user = await User.findById(userId)
        if (user.role === 'admin' || user.role === 'soporte') {
            let {
                reportid,
                status,
                diagnosis,
                actionsCorrective,
                actionsAditional,
                testResults,
                biosVersion,
                operativeSystem,
                accesories,
                recomendations
            } = args

            let setDiagnosis = new Diagnosis({
                reportid,
                diagnosis,
                actionsCorrective,
                actionsAditional,
                testResults,
                biosVersion,
                operativeSystem,
                accesories,
                recomendations
            })

            setDiagnosis.save()

            console.log(setDiagnosis)
            let report = await Report.findById(reportid)
                .populate('device', 'id')

            await Device.updateOne({
                _id: reportid
            }, {
                $set: {
                    diagnosis: setDiagnosis.id
                }
            })
            await Device.updateOne({
                _id: report.device.id
            }, {
                $set: {
                    status: status,
                    diagnosis: setDiagnosis.id
                }
            })
            return await Report.findById(reportid)
                .populate('device', 'model brand serialNumber status')
                .populate('personalinfo', 'name dni address phoneNumber')
        } else return {
            message: 'User is not authorized'
        }
    },
    setParts: async (parents, args, {
        isAuth,
        userId
    }) => {
        if (!isAuth) return {
            message: 'Not authenticated'
        }
        let user = await User.findById(userId)
        if (user.role === 'admin' || user.role === 'soporte') {

            let {
                reportid,
                diagnosis,
                issue,
                link
            } = args


            let setPieces = new Diagnosis({
                reportid,
                diagnosis,
                issue,
                link
            })

            setPieces.save()

            let report = await Report.findById(reportid)
                .populate('device', 'id')

            await Device.updateOne({
                _id: reportid
            }, {
                $set: {
                    pieces: setPieces.id
                }
            })
            await Device.updateOne({
                _id: report.device.id
            }, {
                $set: {
                    status: status,
                    pieces: setPieces.id
                }
            })
            return await Report.findById(reportid)
                .populate('device', 'model brand serialNumber status')
                .populate('personalinfo', 'name dni address phoneNumber')
        } else return {
            message: 'User is not authorized'
        }
    }
}