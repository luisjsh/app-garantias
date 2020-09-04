import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {debounce} from 'lodash'
import {useLazyQuery, useMutation} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_USER_WITH_EMAIL} from '../../graphql/queries/user-queries'
import {ADD_USER} from '../../graphql/mutation/user-mutations'

import userRoleValidation from '../../services/userRoleValidations'

import Notification from '../../components/notification/notification'
import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button/custom-button'
import RoundButton from '../../components/round-button/round-button'
import Title from '../../components/title/title'
import {Page, ButtonWrapper} from './signup-styles'


function SignUp({history, authInfo, setBadNotification}) {
    const [item , setItem] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation:'',
        role: 'admin',
        passwordValidated: false
    })

    const [inputProperties, setInputProperties] = useState({
        emailLoadingVerification: false,
        passwordConfirmBorderColor: false
    })
    
    const [getUserWithEmail, {data}] = useLazyQuery(GET_USER_WITH_EMAIL)

    const [addUser] = useMutation(ADD_USER)

    const formHandler= async (event)=>{
        let {name, value} = event.target
        
        switch(name){
            case 'username':
                setItem({...item, [name]:value})
                break;

            case 'email':

                setItem({...item, [name]:value})
                getUsersWhileTyping(value)
                break;

            case 'password':
                setItem({...item, [name]:value})
                break;

            case 'passwordConfirmation':
                setItem({...item, [name]:value})
                break;
                
            default:
                return setItem(item)
        }
    }

    const getUsersWhileTyping = debounce((value) => {
        setInputProperties({...inputProperties, emailLoadingVerification: ''}) 
        getUserWithEmail({variables:{email: value}})
    }, 300)

    useEffect( (inputProperties)=>{
        if(data){
            data.getUserWithEmail ? 
                setInputProperties({...inputProperties, emailLoadingVerification: 'invalid'}) 
            : 
                setInputProperties({...inputProperties, emailLoadingVerification: 'valid'})
        }
    }, [data])

    const handleSubmit = async (event)=>{
        event.preventDefault()
        let {username, email, password, passwordConfirmation, role} = item
        validatePasswordConfirmation()
        if(inputProperties.passwordConfirmBorderColor === 'invalid' || inputProperties.emailLoadingVerification === 'invalid') return alert('Uno de los datos introducidos es incorrecto')
        
        try{        
            const {data: addedUser} = await addUser({
                variables:{ username, email, password, passwordConfirmation, role }
            })
            authInfo({token: addedUser.addUser.token, expiration: addedUser.addUser.tokenExpiration})
            userRoleValidation(addedUser.addUser.user)
            history.push('/app/homepage')
        }catch(e){
            setBadNotification({name: 'Error de conexion'})
        }
    }

    const validatePasswordConfirmation = () =>{
        item.password === item.passwordConfirmation ?
            setInputProperties({...inputProperties, passwordConfirmBorderColor:'valid'})
            :
            setInputProperties({...inputProperties, passwordConfirmBorderColor: 'invalid'})
    }

    return (
        <form onSubmit={handleSubmit}>
            <Page>
                <Notification />
                <RoundButton handleClick={()=>history.push('/')}/>
                <Title>Registrarse</Title>
                <CustomInput name='username' label='Nombre' value={item.username} handleChange={formHandler}/>
                <CustomInput type='email' name='email' label='Correo' loading={inputProperties.emailLoadingVerification} value={item.email} handleChange={formHandler}/>
                <CustomInput name='password' label='Contraseña' value={item.password} handleChange={formHandler} pattern=".{8,}"/>
                <CustomInput name='passwordConfirmation' label='Repita su contraseña' loading={inputProperties.passwordConfirmBorderColor} value={item.passwordConfirmation} handleChange={formHandler} pattern=".{8,}"/>

                <ButtonWrapper>
                    <CustomButton role='primary'>Registrar</CustomButton>
                    <CustomButton onClick={()=>history.push('/login')} role='secundary'>Iniciar Sesion</CustomButton>
                </ButtonWrapper>
            </Page>
        </form>
    )
}

const mapDispatchtoProps = (dispatch)=>(
    {
        authInfo: (token)=>{dispatch({type:'SET_TOKEN', payload: token})},
        setBadNotification: (data)=>{dispatch({type:'SET_BAD_NOTIFICATION', payload:data})}
    }
)

export default connect(null, mapDispatchtoProps) (withRouter(SignUp));
