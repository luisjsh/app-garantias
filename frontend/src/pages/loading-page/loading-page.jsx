import React from 'react';
import styled, {keyframes} from 'styled-components'

const Page = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: center;
`

const Container = styled.div`
    display:grid;
    justify-items: center;
    align-items: center;
    position: relative;
`

const loading = keyframes`
    0%{
        background-position: left;
    }

    100%{
        background-position: right;
    }
`
const Title = styled.h1`
    font-size: 2.5em;
    color: transparent;
    background: radial-gradient(circle, rgba(254,112,3,1) 0%, rgba(255,255,255,1) 91%);
    background-size: 10000%;
    -webkit-background-clip: text;
    animation: ${loading} 1.5s linear infinite alternate;    
`


function LoadingPage() {
    return (
        <Page>
            <Container>
                <Title>Cargando</Title>
            </Container>
        </Page>
    )
}

export default LoadingPage;
