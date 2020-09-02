import React from 'react';
import styled from 'styled-components'

const Text = styled.h1`
    font-weight: bold;
    padding: ${ props => props.padding? props.padding : '1.5em'};
`

function Title({padding, children}) {
    return (
        <Text padding={padding}>
            {children}
        </Text>
    )
}

export default Title;
