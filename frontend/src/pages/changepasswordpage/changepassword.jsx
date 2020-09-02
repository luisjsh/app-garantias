import React, {useState} from 'react';
import {useLazyQuery} from '@apollo/client'
import styled from 'styled-components'

import {GET_USER_WITH_EMAIL} from '../../graphql/queries/user-queries'

import Title from '../../components/title/title'
import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button/custom-button'

const Page = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    display: grid;
`

function ChangePassword() {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    })

    const [getUserwithEmail, {data}] = useLazyQuery(GET_USER_WITH_EMAIL)

    const formHandler = (event)=>{
        let {name, value} = event.target
        setInputData({...inputData, [name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        getUserwithEmail({variables: {email: inputData.email}})
    }

    console.log(data)


    if(data){
        if(data.getUserWithEmail) return (
            <Page>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Title padding="0.3em">Ingrese la nueva contraseña</Title>
                        <CustomInput name='password' value={inputData.password} handleChange={formHandler}/>
                        <CustomButton role='secundary'>Volver</CustomButton>
                        <CustomButton role='primary'>Siguiente</CustomButton>
                    </Container>
                </form>
            </Page>
        )
    }


    return (
        <Page>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Title>Ingrese su correo electronico</Title>
                    <CustomInput type='email' name='email' value={inputData.email} handleChange={formHandler}/>
                    <CustomButton role='primary'>Siguiente</CustomButton>
                </Container>
            </form>
        </Page>
    )
}

export default ChangePassword;
