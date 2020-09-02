const jwt = require('jsonwebtoken')

const secretCode = require('../secret')

module.exports = (req, res, next) => {
    const token = req.get("authorization");
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
    return next()
}
