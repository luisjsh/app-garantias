const jwt = require('jsonwebtoken')

const secretCode = require('../secret')

module.exports = (req, res, next) => {
    const authHeader = req.get("authentication");
    if(!authHeader){
        req.isAuth = false
        return next()
    }
    const token = authHeader.split('')
    if(!token || token === ''){
        req.isAuth = false
        return next()       
    }
    let decodedToken 
    try{
        decodedToken = jwt.verify(token, secretCode)
    }catch(err){
        req.isAuth = false
        return next()
    }
    if(!decodedToken){
        req.isAuth = false
        return next()
    }
    req.isAuth = true
    req.userId = decodedToken.userId
}
