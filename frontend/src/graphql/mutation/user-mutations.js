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

export const UPDATE_USER = gql`
    mutation updateUser($id: String!, $email: String!, $username: String!, $password: String, $role:String!){
        updateUser(id: $id, email: $email, username: $username, password: $password, role: $role){
            id
            role
        }
    }
`

export const UPDATE_STATUS = gql`
mutation setNewStatus($id: String!, $reportid:String!, $status:String!){
    setNewStatus(id: $id, reportid:$reportid, status:$status){
      id
      issue
      device{
        id
        status
      }
      creator {
        id
      }
    }
  }
`
export const ADD_DIAGNOSIS_FIXED = gql`
    mutation setDiagnosis($reportid:String!, $diagnosis:String!, $status:String!, $actionsCorrective:String!, $actionsAditional:[Name], $testResults:[Name], $biosVersion:String, $operativeSystem: String, $accesories:[Name], $recomendations:[Name]){
        setDiagnosis(reportid:$reportid, 
        diagnosis:$diagnosis, 
        status:$status,
        actionsCorrective:$actionsCorrective, 
        actionsAditional:$actionsAditional, 
        testResults:$testResults, 
        biosVersion:$biosVersion, 
        operativeSystem:$operativeSystem, 
        accesories:$accesories, 
        recomendations:$recomendations){
            
        ...on Report{
            id
                device{
                status
                }
            }
        
        ... on AuthMessage{
            message
        }
        
        }
    }
`

export const ADD_DIAGNOSIS_NEED_PIECES = gql`
mutation setParts($reportid: String, $diagnosis: String, $status: String, $issue: String, $link: String){
    setParts(reportid: $reportid, diagnosis: $diagnosis, status: $status, issue: $issue, link: $link){
        __typename

        ... on Report{
            issue
        }

        ... on AuthMessage{
            message
        }
    }
}
`