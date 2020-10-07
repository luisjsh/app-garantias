import React from 'react'
import styled from 'styled-components'

import Title from '../title/title'

const Wrapper = styled.div`
    display: grid;
    grid-area: aside;
    height: fit-content;
    max-height: 100%;
    width: auto;
    position: sticky;
    top: 0;
    overflow-y: auto;
    transition: .3s;
    border-radius: 10px;

    @media (max-width: 700px){
        background-color: white;

        &:hover, &:focus-within{
            background-color: #cfcccc;
        }
    }
`


const Header = styled.div`
@media (max-width: 700px){
    padding: .4em;
}
`

const Section = styled.section`

@media (max-width: 700px){
    display: none;
    padding:.4em;
    ${Wrapper}:hover &{
        display: block;
    } 

    ${Wrapper}:focus-within &{
        display: block;
    } 
}`

function Aside({title, children}) {
 return (
    <Wrapper>
        <Header tabIndex={0}>
            <Title padding='0'>
            {title}
            </Title>
        </Header>
        <Section>
            {children}
        </Section>
    </Wrapper>)
}

export default Aside
