import {gql} from '@apollo/client'

export const GET_USER_WITH_EMAIL = gql`
    query getUserWithEmail($email: String!){
        getUserWithEmail(email: $email){
                id
                email
        }
    }
`

export const LOGIN = gql`
    query login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            tokenExpiration
            user{
                id
                email
                username
                role
            }
        }
    }
`

export const GET_REPORTS = gql`
    {
       userReports{
           id
           issue
           comments
           device{
                model
                brand
           }
       }
    }
`

export const GET_REPORT = gql`
    query report($id: String!){
        report(id: $id){
            issue
            comments
            createdAt
            description
            invoice
            device{
                model
                brand
                status
            }
        }
    }
`

export const GET_REPORT_ALL_DATA = gql`
    query report($id: String!){
        report(id: $id){
            issue
            comments
            createdAt
            description
            invoice
            invoiceImage{
                path
                id 
            }
            device{
                id
                model
                brand
                status
            }
            personalinfo{
                name
                address
                phoneNumber
            }
        }
    }
`

export const GET_USER = gql`
    {
        user{

            __typename

            ... on AuthData {
                token
                tokenExpiration
                user{
                    id
                    email
                    username
                    role
                }
            }

            ... on AuthMessage {
                message
            }
        }
    }
`

export const GET_ALL_REPORTS = gql`
    {
        reports {         
            id  
            issue
            comments
            createdAt
            description
            invoice
            device{
                model
                brand
                status
            }
        }
    }
`

export const GET_USERS = gql`
    {
        users{
            id
            email
            role
        }
    }
`

export const GET_USER_ID = gql`
    query userId($id: String!){
        userId(id: $id){
            id
            email
            role
            username
        }
    }
`