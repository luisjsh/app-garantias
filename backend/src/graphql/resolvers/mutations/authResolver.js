const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Secret = require('../../../secret') 
const User = require('../../../models/user')

const EncryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

module.exports = {
    addUser: async(parents, args, {isAuth, userId})=>{
        let encryptedPassword = await EncryptPassword(args.password)
        let user = new User({
            email: args.email,
            password: encryptedPassword,
            username: args.username,
            role: args.role
        })
        user.save()
        let token = jwt.sign({userId: user.id, email: user.email}, Secret, {expiresIn: '24h'})
        return {
           token,
           tokenExpiration: 24 ,
           user
        }
    } 
    
}