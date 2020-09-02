const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Secret = require('../../secret') 
const User = require('../../models/user')

const EncryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const comparePassword = async ( password, encryptedPassword )=>{
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = {
    users: async ()=>{
        return await User.find()
    },
    
    getUserWithEmail:async (args) =>{
            return await User.findOne({email: args.email})
    },

    addUser: async(args)=>{
        let encryptedPassword = await EncryptPassword(args.password)
        let user = new User({
            email: args.email,
            password: encryptedPassword,
            username: args.username,
            role: args.role
        })
        let token = jwt.sign({userId: user.id, email: user.email}, Secret, {expiresIn: '24h'})
        return {
           token,
           tokenExpiration: 1 ,
           user
        }
    },

    login: async ({email, password})=>{
        let user = await User.findOne({email: email})
        if(!user) throw new Error('Invalid credentials')
        if(await comparePassword(password, user.password) == false) throw new Error('Invalid credentials')
        let token = jwt.sign({userId: user.id, email: user.email}, Secret, {expiresIn: '24h'})
        
        return {
           token,
           tokenExpiration: 1 ,
           user
        }
    }
}