import styled from 'styled-components'

export const Page = styled.div`
    margin-top: 4%;
    padding: 2em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1.5fr;
    grid-template-areas: 
        "header aside"
        "section  aside"
        "buttonSection aside";
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    grid-area: header;
    flex-direction: rows;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 25px;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: section;
`
export const Aside = styled.div`
    display: grid;
    grid-area: aside;
    height: 15em;
    width: auto;
    border-radius: 10px;
    position: sticky;
    top: 4em;
`

export const ButtonSection = styled.div`
    grid-area: buttonSection;
    display: grid;
    grid-template-columns: 12em 16em;
`

export const ReportNumberText = styled.h1`
    padding: .5em;
    font-size: 25px;
    color: #FF6B00;
    border-radius: 2em;
`
