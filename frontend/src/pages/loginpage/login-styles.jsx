import React from 'react';
import styled from 'styled-components'

const Page = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Grid = styled.div`
    display: grid;
    grid-area: auto;
    grid-auto-columns: max-content;
    align-items: center;
    justify-content: stretch;
    grid-template-rows: 10em 4em 4em 1em 4em 3em;
    grid-gap: .6em;
    text-align: center;
`
export const Span = styled.span`
    color: gray;
    font-size: 1em;
    cursor: pointer;

    &:hover, &:focus{
        color: black;
    }
`


function LoginStyles({children}) {
    return (
        <Page>
            <Grid>
            {children}
            </Grid>
        </Page>
    )
}

export default LoginStyles;

