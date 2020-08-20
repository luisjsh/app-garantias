import React, {useState, useEffect} from 'react';
import {debounce} from 'lodash'
import {useLazyQuery, useMutation} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_USER_WITH_EMAIL} from '../../graphql/queries/user-queries'
import {ADD_USER} from '../../graphql/mutation/user-mutations'

import userRoleValidation from '../../services/userRoleValidations'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button/custom-button'
import Title from '../../components/title/title'
import {Page, ButtonWrapper} from './signup-styles'


function SignUp({history}) {
    const [item , setItem] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation:'',
        role: 'guest',
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
        if(inputProperties.passwordConfirmBorderColor === 'red' || inputProperties.emailLoadingVerification === 'red') return alert('Uno de los datos introducidos es incorrecto')
        const {data: addedUser} = await addUser({
            variables:{ username, email, password, passwordConfirmation, role}
        })
        userRoleValidation(addedUser.addUser)
        history.push('/homepage')
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
                <Title>Registrarse</Title>
                <CustomInput name='username' label='Nombre' value={item.username} handleChange={formHandler}/>
                <CustomInput type='email' name='email' label='Correo' loading={inputProperties.emailLoadingVerification} value={item.email} handleChange={formHandler}/>
                <CustomInput name='password' label='Contraseña' value={item.password} handleChange={formHandler} pattern=".{8,}"/>
                <CustomInput name='passwordConfirmation' label='Repita su contraseña' loading={inputProperties.passwordConfirmBorderColor} value={item.passwordConfirmation} handleChange={formHandler} pattern=".{8,}"/>

                <ButtonWrapper>
                    <CustomButton onClick={()=>history.push('/')} role='secundary'>Ir a inicio</CustomButton>
                    <CustomButton role='primary'>Registrar</CustomButton>
                </ButtonWrapper>
            </Page>
        </form>
    )
}

export default withRouter(SignUp);
