import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: .5em;
    border-radius: 10px;
    background-color: orange;
    color: white;
    max-width: 1fr;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    cursor:pointer;
    max-height: 20em;

    &:hover, &:focus-within{
        transform: translate(0, -10px)
    }

    &:active{

    }
`

const CardTitle = styled.h1`
    font-weight: bold;
`

const CardBodyText = styled.span`
    font-size: light;
    color: white;
    font-weight: 300;
    font-size: 14px;
    word-break: break-all;
`

function Card({title, children}) {
    return (
        <Wrapper>
            <CardTitle>{title}</CardTitle>
            <CardBodyText>
            {children}
            </CardBodyText>
        </Wrapper>
    )
}

export default Card
