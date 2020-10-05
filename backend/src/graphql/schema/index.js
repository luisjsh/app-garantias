const {
    gql
} = require('apollo-server-express')
module.exports = gql `
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

    type Piece {
        id: ID
        status: String
        name: String
        issue: String
        link: String
    }

    type Device {
        id: ID!
        model: String!
        brand: String!
        serialNumber: String!
        status: String!
        owner: User!
        report: Report!
        pieces: [Piece]
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

    type NameObject {
        id: ID
        name: String
    }

    type Diagnosis {
        id: ID!
        diagnosis: String
        actionsCorrective: String
        actionsAditional: String
        testResults: [NameObject]
        biosVersion: String
        operativeSystem: String
        accesories: [NameObject]
        recomendations: [NameObject]
    }

    type NeedParts {
        id: ID!
            diagnosis: String
        fail: String
        link: String
    }


    input Name {
        id: ID
        name: String!
        status: String
    }

    input Pieces {
        id: ID
        name: String
        status: String
        issue: String
        link: String
    }

    type DeviceList {
        device: [Device]
    }

    input ReportCondition {
        id: ID
        condition: String
    }

    union SearchResult = AuthData | AuthMessage

    union DiagnosisResult = AuthMessage | Report

    union ReportsWrapper = AuthMessage | DeviceList

    type Query{
        users: [User!]!
        getUserWithEmail(email: String!): User
        login(email: String!, password: String!): AuthData!
        reports: [Report]
        userReports: [Report]
        report(id: String!): Report
        user: SearchResult
        userId (id: String!): User!
        reportsCondition(conditions: [ReportCondition]): ReportsWrapper
    }

    type Mutation{
        addUser(email: String!, password: String!, username: String!, role: String): AuthData 
        updateUser(email: String!, password: String, username: String!, id:String!, role: String!): User
        setNewStatus(id: String!, reportid:String!, status: String!): Report
        setDiagnosis(reportid: String!, diagnosis: String!, status: String!, actionsCorrective: String, actionsAditional: [Name], testResults: [Name], biosVersion: String, operativeSystem: String, accesories: [Name], recomendations: [Name]): DiagnosisResult
        setParts(reportid: String, status: String, piece: [Pieces], diagnosis: String): DiagnosisResult
    }
`