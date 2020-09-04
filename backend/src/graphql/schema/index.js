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
        id: ID!
        token: String!
        tokenExpiration: Int!
        user: User!
    }

    type PhoneNumber {
        id: ID!
        number: String!
        user: User!
    }

    type UserPersonalInfo{
        name: String!
        address: String
        dni: String!
        account: User!
        phoneNumber: [PhoneNumber!]
    }

    type InvoiceImage {
        id: ID!
        path: String!
    }

    type Device {
        id: ID!
        model: String!
        brand: String!
        serialNumber: String!
        status: String!
        owner: User!
    }

    type Report{
        id: ID!
        issue: String
        description: String
        comments: String
        createdAt: String
        invoice: String,
        invoiceImage: [InvoiceImage]
        creator: User
        device: Device
    }

    type RootQuery{
        users: [User!]!
        getUserWithEmail(email: String!): User
        login(email: String!, password: String!): AuthData!
        reports: [Report]
        userReports: [Report]
        report(id: String!): Report
        user: AuthData
        userId (id: String!): User!
    }

    type RootMutation{
        addUser(email: String!, password: String!, username: String!, role: String): AuthData 
    }

    schema{
        query: RootQuery  
        mutation: RootMutation
    }
`) 