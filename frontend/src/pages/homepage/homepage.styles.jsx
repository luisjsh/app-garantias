import styled from 'styled-components'

export const Page = styled.div`
    padding: 1em;
    margin-top: 5%;
    align-items: center;
    justify-items: center;
    `

export const Header = styled.header`
    padding: .4em;
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    position: sticky;
    top: 1em;
`

export const Section = styled.section`
    padding: .4em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`