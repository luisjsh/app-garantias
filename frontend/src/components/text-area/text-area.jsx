import React from 'react'
import styled from 'styled-components'

import problemIcon from '../img/icon/problem.svg'
import descriptionIcon from '../img/icon/description.svg'


const TextArea = styled.textarea`
    border: none;
    background: #909090;
    color: white;
    border-radius: 10px;
    padding: .8em;
    width: 18em;
    height: 7em;
    transition: 0.3s;

    &:hover{
        background: #aaaaaa;
    }
`

const Wrapper = styled.div`
    padding: 1em .1em;
    display: flex;
    position: relative;
    justify-content: center;
    align-items:center;
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

const Icon = styled.div`
    background: url(${ props =>{
        switch(props.name){
            case 'reportIssue':
                return problemIcon

            case 'reportGeneralDescription':
                return descriptionIcon

           default:
                return ''
        }
    }}) no-repeat;
    background-size: 75%;
    background-position: center;
    width: 40px;
    height: 40px;
`


function Textarea({name, label, handleChange, ...otherProps}) {
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
            <TextArea {...otherProps} name={name} onChange={handleChange} required/>
        </Wrapper>
    )
}

export default Textarea