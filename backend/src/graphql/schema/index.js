const {gql} = require('apollo-server-express')
module.exports = gql`
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
        id: ID
        name: String
        address: String
        dni: String
        user: User
        phoneNumber: String
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
        personalinfo: UserPersonalInfo
        device: Device
    }

    type AuthMessage{
        message: String
    }

    union SearchResult = AuthData | AuthMessage

    type Query{
        users: [User!]!
        getUserWithEmail(email: String!): User
        login(email: String!, password: String!): AuthData!
        reports: [Report]
        userReports: [Report]
        report(id: String!): Report
        user: SearchResult
        userId (id: String!): User!
    }

    type Mutation{
        addUser(email: String!, password: String!, username: String!, role: String): AuthData 
        updateUser(email: String!, password: String, username: String!, id:String!, role: String!): User
        setNewStatus(id: String!, reportid:String!, status: String!): Report
    }
`