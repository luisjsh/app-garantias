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

export const ADD_REPORT = gql`
    mutation($name: String!, $dni: String!, $address: String!, $phoneNumber: [phoneNumber!], $brand: String!, $model: String!,
        $status: String!, $serialNumber: String!, $issue: String!, $comments: String!, $description: String!, $invoiceNumber: String!, 
        $file: Upload!){

            addReport(
                 name: $name,
                 dni: $dni, 
                 address: $address, 
                 phoneNumber: $phoneNumber, 
                 brand: $brand, 
                 model: $model, 
                 status: $status,
                 serialNumber: $serialNumber, 
                 issue: $issue, 
                 comments: $comments, 
                 description: $description, 
                 invoiceNumber: $invoiceNumber,
                 file: $file){
                    creator{
                        id
                    }
                }
            } 
        
`
  