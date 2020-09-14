const queryResolver = require('./query/index')
const mutationResolver = require('./mutations/index')
const unionResolver = require('./unionResolver')

const rootResolver = {
    ...unionResolver,
    Query: {
    ...queryResolver
    },
    Mutation: {
    ...mutationResolver
    }
}

module.exports = rootResolver