import styled from 'styled-components'

export const Page = styled.div`
    padding: 2em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1.5fr;
    grid-template-areas: 
        "header aside"
        "section  aside"
        "buttonSection aside";

    @media (max-width: 700px){
        padding-left: .2em;
        padding-right: .2em;
        padding-top: 0;
        grid-gap: 1em;
        grid-template-areas:
        "header header"
        "section section"
        "aside aside"
        "buttonSection buttonSection";
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    grid-area: header;
    flex-direction: rows;
    position: relative;

    @media (max-width: 700px){
        justify-content: center;
        position: sticky;
        background: #f2f2f2;
        top: 0;
    }
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 25px;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    grid-area: section;
    border-radius: 10px;

    @media (max-width: 700px){
        background-color: white;
        padding: 1em;

    }
`
export const ButtonSection = styled.div`
    grid-area: buttonSection;
    display: grid;
    grid-template-columns: 15em;
    @media (max-width: 700px){
        padding: 1em;
        grid-gap: .3em;
        grid-template-columns: 2fr;
    }
`

export const ReportNumberText = styled.h1`
    padding: .5em;
    font-size: 25px;
    color: #FF6B00;
    border-radius: 2em;
`

