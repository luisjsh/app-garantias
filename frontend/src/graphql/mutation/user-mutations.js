import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation($email: String!, $password: String!, $username: String!, $role: String){
        addUser(email:$email, password:$password, username:$username, role: $role){
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
  