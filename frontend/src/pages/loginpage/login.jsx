import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {LOGIN} from '../../graphql/queries/user-queries'
import userRoleValidation from '../../services/userRoleValidations'

import Notification from '../../components/notification/notification'
import LoginPage, {Span} from './login-styles'
import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button/custom-button'
import RoundButton from '../../components/round-button/round-button'
import Title from '../../components/title/title'
import LoadingPage from '../loading-page/loading-page'

function Login({authInfo, history, setBadNotification}) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [login, {error, loading, data}] = useLazyQuery(LOGIN)

    const formHandler =(event)=>{
        let {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        let {email, password} = formData
        try{
            login({variables: {email, password}})
        } catch(e){
            setBadNotification({name: 'Error de conexion'})
        }
    }

    const handleUserLoged = ()=>{
        if(data){
            if(data.login){
                userRoleValidation(data.login.user)
                authInfo({token: data.login.token, expiration: data.login.tokenExpiration})
                history.push('/app/homepage')
            }
        }
    }

    useEffect(handleUserLoged,[data])
    

    useEffect(()=>{
        if(error) setBadNotification({name: 'Error de conexion'})
    })

    if(loading) return <LoadingPage/>



    return (
        <form onSubmit={handleSubmit}>
            <LoginPage>
                <Notification />
                <RoundButton handleClick={()=>history.push('/')}/>
                <Title>Iniciar Sesion</Title>
                <CustomInput name='email' type='email' label='Correo' value={formData.email} onChange={formHandler}/>
                <CustomInput name='password' type='password' label='Contraseña' value={formData.password} onChange={formHandler}/>
                <Span>¿Olvidó su contraseña?</Span>
                <CustomButton role='primary'>Iniciar Sesion</CustomButton>
                <CustomButton onClick={()=>history.push('/signup')}role='secundary'>Registrarse</CustomButton>
            </LoginPage>
        </form>
    )
}


const mapDispatchtoProps = (dispatch)=>(
    {
        authInfo: (token)=>{dispatch({type:'SET_TOKEN', payload: token})},
        setBadNotification: (data)=>{dispatch({type:'SET_BAD_NOTIFICATION', payload:data})}
    }
)


export default connect (null, mapDispatchtoProps) (withRouter(Login))
