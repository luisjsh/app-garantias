import React from 'react';
import styled from 'styled-components'

import emailIcon from '../img/icon/email.svg'
import usernameIcon from '../img/icon/username.svg'
import passwordIcon from '../img/icon/password.svg'

import dniIcon from '../img/icon/dni.svg'
import addressIcon from '../img/icon/address.svg'
import phoneNumberIcon from '../img/icon/phoneNumber.svg'

import serialNumberIcon from '../img/icon/serialNumber.svg'
import brandIcon from '../img/icon/brand.svg'
import modelIcon from '../img/icon/deviceModel.svg'

import commentIcon from '../img/icon/comment.svg'

import invoiceNumberIcon from '../img/icon/invoice.svg'

import LoadingIcon from '../img/input-verification/loading.svg'
import InvalidIcon from '../img/input-verification/invalid.svg'
import VerifiedIcon from '../img/input-verification/verified.svg'


import {rotate} from '../keyframes/keyframes'

const Input = styled.input`
    border: none;
    background: #909090;
    color: white;
    border-radius: 18px;
    padding: .8em;
    width: 18em;
    transition: 0.3s;

    &:hover{
        background: #aaaaaa;
    }
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
                
            case 'dni':
                return dniIcon

            case 'address':
                return addressIcon

            case 'phoneNumber':
                return phoneNumberIcon
            
            case 'deviceModel':
                return modelIcon

            case 'deviceSerialNumber':
                return serialNumberIcon
                
            case 'deviceBrand':
                return brandIcon
            
            case 'reportComments':
                return commentIcon

            case 'invoiceNumber':
                return invoiceNumberIcon

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
    transition: .3s;
    z-index: 0;

    ${Wrapper}:hover &{
        top:-.4em;
        color: #909090;
    }
    
    ${Wrapper}:focus-within &{
        top:-.4em;
        color: #909090;
    }
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
                        top={otherProps.value.length > 0 ? '-.4em' : '1.7em'} 
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
