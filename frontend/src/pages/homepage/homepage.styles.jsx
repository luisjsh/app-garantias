import styled from 'styled-components'

export const Page = styled.div`
    padding: 1em;
    display: grid;
    margin-top: 5%;
    align-items: center;
    justify-items: center;
`

export const Header = styled.header`
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    padding: 1em;
`

export const Section = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 1em;
`