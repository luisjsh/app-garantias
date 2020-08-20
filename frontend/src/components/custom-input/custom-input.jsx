import React from 'react';
import styled from 'styled-components'

import emailIcon from '../img/icon/email.svg'
import usernameIcon from '../img/icon/username.svg'
import passwordIcon from '../img/icon/password.svg'
import LoadingIcon from '../img/input-verification/loading.svg'
import InvalidIcon from '../img/input-verification/invalid.svg'
import VerifiedIcon from '../img/input-verification/verified.svg'

import {rotate} from '../keyframes/keyframes'

const Input = styled.input`
    border: 1px solid ${props=> props.borderColor ? props.borderColor : 'grey'};
    background: #909090;
    color: white;
    border-radius: 18px;
    padding: .8em;
    width: 18em;
`

const Wrapper = styled.div`
    padding: 1em .1em;
    display: flex;
    position: relative;
    align-items:center;
`

const Icon = styled.div`
    background: url(${ props =>{
        switch(props.name){
            case 'username':
                return usernameIcon

            case 'email':
                return emailIcon

            case 'password':
                return passwordIcon
                
            case 'passwordConfirmation':
                return passwordIcon    
            default:
                return ''
        }
    }}) no-repeat;
    background-size: 75%;
    background-position: center;
    width: 40px;
    height: 40px;
`
const Label = styled.label`
    position: absolute;   
    left: 3.5em;
    color: ${props => props.color ? props.color : 'white'};
    top: ${props => props.top ? props.top : ''};
    transition: 0.3s;
`

const Round = styled.div`
    position: absolute;
    right: -2.2em;
    background: white;
    border-radius: 100%;
    width: 35px;
    height: 35px;
`

const Loading = styled(Round)`
    background-image: url(${LoadingIcon});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat; 
    animation: ${rotate} 1s linear infinite;
`

const Valid = styled(Round)`
    background: green;
    background-image: url(${VerifiedIcon});
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat; 
`

const Invalid = styled(Round)`
    background: red;
    background-image: url(${InvalidIcon});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat; 
`

function CustomInput({name, label, loading, handleChange, ...otherProps}) {
    return (
        <Wrapper>
            <Icon name={name}/>
            {
                label ? 
                    <Label 
                        color={otherProps.value.length > 0 ? '#909090' : ''} 
                        top={otherProps.value.length > 0 ? '-.4em' : ''} 
                        >{label}</Label>
                    : ''
            }
            <Input name={name} onChange={handleChange} {...otherProps} required></Input>
            
            {
                loading === '' && <Loading />
            }
            {
                
                loading === 'invalid' && <Invalid />
            }
            {
                
                loading === 'valid' && <Valid />
            }
        </Wrapper>
    )
}

export default CustomInput;
