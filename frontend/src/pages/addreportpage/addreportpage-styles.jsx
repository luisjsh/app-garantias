import styled, {keyframes} from 'styled-components'

const Appear = keyframes`
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`

export const Title = styled.h1`
    font-style: normal;
    font-size: 30px;
    font-weight: bold;
    padding: 1em 0;
    margin: 0;
`

export const SubTitle = styled.h4`
    position: sticky;
    top: 0;
    background-color: white;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    padding: 1em 0;
    margin: 0;
`

export const Page = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    overflow-y: auto;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    animation: ${Appear} .3s;
`

export const ButtonSection = styled.section`
    display: grid;
    width: 20em;
    align-items:center;
    justify-items: center;
    grid-template-columns: 2fr 2fr;
`

export const Button = styled.button`
    border-radius: 100%;
    width: 1.5em;
    height: 1.5em;
    font-size: 36px;
    font-weight: bold;
    border:none;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.3);
    
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
    }};
    cursor: pointer;

    &::after{
        content: '\\${props => props.content ? props.content : ''}';
    }
`
/*
export const ImgSide = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(243,88,0,1) 0%, rgba(255,153,0,1) 100%);
`
*/