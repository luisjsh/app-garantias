import React from 'react'
import styled from 'styled-components'

import NoDataImage from "../../components/img/background/no-data.svg";

export const Page = styled.div`
  padding: 1em;
  align-items: center;
  justify-items: center;
`;

export const Header = styled.header`
    padding: .4em;
    font-weight: bold;
    font-size: 30px;
    position: sticky;
    display: grid;
    grid-gap: .2em;
    grid-template-columns: 2fr 2fr;
    background-color: #f2f2f2;
    top: 0;
`

const SectionBody = styled.section`
    padding: .4em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(250px, 17em));

    &:empty{
      background-color: brown;
      padding: 7em;
    }
`
const SectionTitle = styled.h3`
  font-weight: 400;
  color: #707070;
`

export const NoData = styled.div`
  width: 300px;
  height: 300px;
  background: url(${NoDataImage}) no-repeat;
  bakcground-position: center;
  background-size: 300px;
`;

export const SectionWrapper = styled.div`
  padding: .4em;

  &:empty{
    background-color: brown;
  }
`

export const Section = ({title, children})=>{
  return(
    <SectionWrapper>
      <SectionTitle>
        {title}
      </SectionTitle>
      
      <SectionBody>
        {children}
      </SectionBody>
    </SectionWrapper>
  )
}