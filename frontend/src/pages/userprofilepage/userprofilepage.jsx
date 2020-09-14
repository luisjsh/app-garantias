import React , {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useQuery, useMutation} from '@apollo/client'

import {GET_USER_ID} from '../../graphql/queries/user-queries'
import {UPDATE_USER} from '../../graphql/mutation/user-mutations'


import {Page} from '../homepage/homepage.styles'
import LoadingPage from '../loading-page/loading-page'
import CustomSelect from '../../components/custom-select/custom-select'
import CustomButton from '../../components/custom-button/custom-button'

function UserProfile({user, match}) {
    let {profileId} = match.params

    let [formData, setFormData] = useState({
        role: ''
    })
    
    let {loading, data} = useQuery(GET_USER_ID, {
        variables: {id: profileId}
    })

    let [updateUser] = useMutation(UPDATE_USER) 


    const formHandler = (event)=>{
        let {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let {role} = formData
        console.log(data.userId)
        let {id, email, username} = data.userId
        let {data: userData} = updateUser({
                    variables: {
                        id,
                        email,
                        password: null,
                        username,
                        role
                    }
                })
        console.log(userData)
    }

    if(loading) return <LoadingPage />

    if(data){
        if(data.userId) return(
            <Page>
                <form onSubmit={handleSubmit}>
                    Email:{data.userId.email}
                    Rol:{data.userId.role ? data.userId.role : ''}
                    { user.role === 'Admin' && <CustomSelect 
                        name='role'
                        handleChange={formHandler}
                        options={[{
                            id: 0,
                            optionValue:'guest',
                            optionName:'Cliente'
                        },{
                            id: 1,
                            optionValue:'garantias',
                            optionName:'Garantias'
                        },{
                            id: 2,
                            optionValue:'soporte',
                            optionName:'Soporte',
                        },{
                            id: 3,
                            optionValue:'admin',
                            optionName:'Administrador'
                        }]}/>}
                    <CustomButton>Submit</CustomButton>
                </form>
            </Page>
        )
    }

    return (
        <Page>
            asdlasdjkn
            <CustomSelect />

        </Page>
    )
}

const mapStatetoProps =({user: {user}})=>{
    return{
        user
    }
}

export default connect(mapStatetoProps)(withRouter(UserProfile));
