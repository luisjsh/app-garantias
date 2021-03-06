import React from 'react'
import styled from 'styled-components'

const SecundaryTitle = styled.h3`
  font-weight: bold;
  font-size: 1.3em;
`

const P = styled.p`
  font-size: 1.3em;
  margin-left: 3px;
  font-weight: 400;
  `

function SecundaryText({children, title}){
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <SecundaryTitle>{title}</SecundaryTitle>
        <P>{children}</P>
      </div>
    )
  }

  export default SecundaryText