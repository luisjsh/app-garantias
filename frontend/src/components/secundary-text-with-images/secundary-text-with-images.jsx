import React from 'react'
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
import problemIcon from '../img/icon/problem.svg'
import descriptionIcon from '../img/icon/description.svg'

import invoiceNumberIcon from '../img/icon/invoice.svg'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.span`
    font-weight: 400;
    word-break: break-all;
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
                
            case 'reportIssue':
                return problemIcon

            case 'reportGeneralDescription':
                return descriptionIcon

            case 'invoiceNumber':
                return invoiceNumberIcon

            default:
                return ''
        }
    }}) no-repeat;
    background-size: 30px;
    background-position: center;
    width: 40px;
    height: 40px;
`

const Title = styled.h3`
    margin-right: .3em;
    font-weight: 500;
`

function SecundaryTextWithImages({name, title, children}) {
    return (
        <Wrapper>
            <Icon name={name}/>
            <Title>{title}</Title>
            <Text>
                {children}
            </Text>
        </Wrapper>
    )
}

export default SecundaryTextWithImages