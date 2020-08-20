import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation($email: String!, $password: String!, $username: String!, $role: String){
        addUser(email:$email, password:$password, username:$username, role: $role){
        id,
        username,
        email,
        role
    }
}`
  