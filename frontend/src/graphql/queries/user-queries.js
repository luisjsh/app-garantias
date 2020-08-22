import {gql} from '@apollo/client'

export const GET_USER_WITH_EMAIL = gql`
    query getUserWithEmail($email: String!){
        getUserWithEmail(email: $email){
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