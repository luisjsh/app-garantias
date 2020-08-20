const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type User{
        id: ID!
        email: String!
        password: String!
        username: String!
        role: String
    }

    type  AuthData{
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery{
        users: [User!]!
        getUserWithEmail(email: String!): User!
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation{
        addUser(email: String!, password: String!, username: String!, role: String): User 
    }

    schema{
        query: RootQuery  
        mutation: RootMutation
    }
`) 