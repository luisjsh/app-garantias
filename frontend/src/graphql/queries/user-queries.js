import {gql} from '@apollo/client'

export const GET_USER_WITH_EMAIL = gql`
    query getUserWithEmail($email: String!){
        getUserWithEmail(email: $email){
            id,
            username,
            email
        }
    }
`