const User = require('../../../models/user')

module.exports = {
    updateUser: async (parents, args, {isAuth, userId})=>{
        let user = await User.findById(userId)
        if(user.role !== 'admin') return null

        let {id, username, email, role} = args
        await User.updateOne({_id: id}, {
            $set:{
                username,
                email,
                role
            }
        })
        return await User.findById(id)
    }
}