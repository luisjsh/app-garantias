const authResolver = require('./authResolver')
const adminResolver = require('./adminResolver')
const reportResolver = require('./reportResolver')

module.exports = {
    ...authResolver,
    ...adminResolver,
    ...reportResolver
}