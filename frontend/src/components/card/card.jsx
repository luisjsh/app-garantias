import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "createdAt"
    "title"
    "reportNumber"
    "description";
    height: fit-content;
    grid-gap: .4em;
    padding: .5em;
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: -1px 4px 8px rgba(0,0,0,0.25);
    transition: 0.3s;
    cursor:pointer;
    max-height: 9em;

    &:hover, &:focus-within{
        transform: translate(0, -10px)
    }

    &:active{

    }
`

const CardTitle = styled.h2`
    font-weight: bold;
    word-break: break-all;
    margin: 0;
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
`

const CardBodyText = styled.span`
    color: black;
    font-weight: 400;
    font-size: 14px;
    word-break: break-all;
    grid-area: ${props => props.gridArea ? props.gridArea : ''};
`

const Paragraph = styled.p`
    display: inline;
    -webkit-mask-image: linear-gradient(180deg,#000 .1%,transparent);
    word-break: break-all;
    margin: 0;
`

function Card({title, reportId, handleClick, children}) {
    return (
        <Wrapper onClick={handleClick}>
            <CardBodyText gridArea='createdAt'>Creado hace 4 dias</CardBodyText>
            <CardTitle gridArea='title'>{title}</CardTitle>
            <CardBodyText gridArea='reportNumber'>{reportId}</CardBodyText>
            <Paragraph gridArea='description'>
            {children}
            </Paragraph>
        </Wrapper>
    )
}

export default Card
