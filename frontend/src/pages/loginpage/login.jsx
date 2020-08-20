import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {useLazyQuery} from '@apollo/client'

import {GET_USER_WITH_EMAIL} from '../../graphql/queries/user-queries'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button/custom-button'
import Title from '../../components/title/title'

function Login({history}) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [getUserWithEmail, {loading, data}] = useLazyQuery(GET_USER_WITH_EMAIL)

    const formHandler =(event)=>{
        let {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        let {email, password} = formData
        await getUserWithEmail({variables: {email}})
        console.log(data)
        /*
        if(formData.email !== data.email || formData.password !== data.password) return alert('Some data its wrong')
        if(formData.email === data.email && formData.password === data.password) return alert('they´re the same')*/
    }

    if(loading) return <div>loading</div>

    if(data){
    }

    return (
        <form onSubmit={handleSubmit}>  
            <CustomInput name='email' type='email' label='Correo' value={formData.email} onChange={formHandler}/>
            <CustomInput name='password' type='password' label='Contraseña' value={formData.password} onChange={formHandler}/>
            <CustomButton role='primary'>Iniciar Sesion</CustomButton>
        </form>
    )
}

export default withRouter(Login);
