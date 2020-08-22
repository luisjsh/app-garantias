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
        token: String!
        tokenExpiration: Int!
        user: User!
    }

    type RootQuery{
        users: [User!]!
        getUserWithEmail(email: String!): User
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation{
        addUser(email: String!, password: String!, username: String!, role: String): AuthData 
    }

    schema{
        query: RootQuery  
        mutation: RootMutation
    }
`) 