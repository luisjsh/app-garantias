const User = require('../../../models/user')

module.exports = {
    updateUser: async (parents, args, {isAuth, userId})=>{
        console.log(await findById(userId))
        let user = await findById(userId)
        if(user.role !== 'admin') return null

        let {id, username, email, role} = args
        await User.updateOne({_id: id}, {
            $set:{
                username,
                email,
                role
            }
        })
    }
}