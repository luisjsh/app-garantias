const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Secret = require('../../../secret') 
const User = require('../../../models/user')
const UserPersonalInfo = require('../../../models/userPersonalInfo')

const comparePassword = async ( password, encryptedPassword )=>{
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = {
    user:async (parents, args, {isAuth, userId})=>{
        if(!userId) return {message: 'No id'}
        let user = await User.findById(userId)
        let token = jwt.sign({userId: user.id, email: user.email}, Secret, {expiresIn: '24h'})
        return {
            token,
            tokenExpiration: 24,
            user
        }
    },
    userId: async (parents, args, {isAuth, userId})=>{
        return await User.findById(args.id);
    },
    users: async ()=>{
        return await User.find()
    },
    
    getUserWithEmail:async (parents, args, {isAuth, userId}) =>{
            return await User.findOne({email: args.email})
    },

    login: async (parents, {email, password}, {isAuth, userId})=>{
        let user = await User.findOne({email: email})
        if(!user) return {message: 'No id'}
        if(await comparePassword(password, user.password) == false) return {message: 'Invalid credentials'}
        let token = jwt.sign({userId: user.id, email: user.email}, Secret, {expiresIn: '24h'})
        
        return {
           token,
           tokenExpiration: 24 ,
           user
        }
    }
}