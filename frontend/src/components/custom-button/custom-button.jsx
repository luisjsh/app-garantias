import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    padding: 1em 3em;
    border-radius: 1.5em;
    border:none;
    cursor:pointer;
    transition 0.2s;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    ${props =>{
        switch(props.role){
            case 'primary':    
                return `
                    color: white;
                    background: #FF6B00;
                
                    &:hover, &:focus{
                        background: #DF5E00;
                    }
                `
            case 'secundary':
                return `
                    color: #FF6B00;
                    background: white;

                    &:hover, &:focus{
                        background: #E4E4E4;
                    }
                `

            default:
                return ``             
        }
    }}
`

const Wrapper = styled.div`
    padding: 0.2em;
    width: 100%;
    `

function CustomButton({handleClick, children, ...otherProps}) {
    return (
        <Wrapper>
            <Button onClick={handleClick} {...otherProps}>
            {children}   
            </Button>
        </Wrapper>
    )
}

export default CustomButton;
