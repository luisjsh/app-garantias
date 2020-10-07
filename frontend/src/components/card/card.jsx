import React from 'react'
import styled, {keyframes} from 'styled-components'

const CardAppear = keyframes`
    0%{
        transform: translateY(50px);
    }

    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "createdAt"
    "title"
    "reportNumber"
    "description";
    opacity: 0;
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
    animation: ${CardAppear} 1s ${props => props.secondsAppear ? `.${props.secondsAppear}s` : ''} forwards;

    &:hover, &:focus-within{
        transform: scale(0, -10px)
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

function Card({title, reportId, handleClick, children, secondsAppear}) {
    return (
        <Wrapper onClick={handleClick} secondsAppear={secondsAppear}>
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
