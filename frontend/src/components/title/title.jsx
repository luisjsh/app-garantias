import React from 'react';
import styled from 'styled-components'

const Text = styled.h1`
    font-weight: bold;
    padding: 1.5em;
`

function Title({children}) {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default Title;
