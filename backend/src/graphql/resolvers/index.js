const authResolver = require('./authResolver')
const reportResolver = require('./reportResolver')


const rootResolver = {
    ...authResolver,
    ...reportResolver
}

module.exports = rootResolver