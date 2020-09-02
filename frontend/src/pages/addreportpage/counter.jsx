import React from 'react'
import styled, {keyframes} from 'styled-components'

const Appear = keyframes `
    0%{
        opacity: 0;
    }

    100%{
        opacity: 100%;
    }
`

const Round = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.3em;
    width: 1.3em;
    font-size: 28px;
    animation: ${props => props.primary === 'primary' ? Appear : ''} 1s;
    text-align: center;
    border-radius: 100%;
    cursor: pointer;

    ${props => props.primary === 'primary' ? `
    color: white;
    background-color: #FF6B00;
    font-weight: bold;
    `     
    : 
    `
  `}
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
`

function Counter({setFormSteps, Steps, currentStep}) {
    return (
        <Wrapper>
        {
            Steps.map( ({id, step}) =>(
            <Round key={id} primary={currentStep === step ? 'primary' : ''}>{id}</Round>
            ))
        }</Wrapper>
    )
}

export default Counter