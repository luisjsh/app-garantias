import React from 'react'
import styled , {keyframes} from 'styled-components'

import trashCanIcon from '../img/icon/trashCan.svg'
import SecundaryText from '../secundary-text/secundary-text'


const CardAppear = keyframes`
    0%{
        transform: translateY(50px);
    }

    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

const Card = styled.div`
  padding: .4em;
  display: flex;
  background: white;
  border: 1px solid white;
  opacity: 0;
  border-radius: 10px;
  box-shadow: -1px 4px 8px rgba(0,0,0,0.25);
  flex-direction: column;
  height: fit-content;
  max-height: 3.5em;
  overflow: hidden;
  transition: .8s cubic-bezier(0.48, 0.81, 0.51, 1.02);
  outline: none;
  cursor: pointer;
  animation: ${CardAppear} 1s ${props => props.secondsToAppear ? `.${props.secondsToAppear}s` : ''} forwards;

  &:focus {
    background: #fcfcfc;
    border: 1px solid #FF6B00;
    max-height: 30em;
  }
  `

const CardSection = styled.div`
  display: block;
`


const CardTitle = styled.h3`
  margin: 0;
  color: grey;
  transition: .3s;
  ${Card}:hover &{
    color: #FF6B00;
  }

  ${Card}:focus &{
    color: #FF6B00;
    font-weight: bold;
  }
`
const CardHeader = styled.header` 
  position: relative;
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
`

const CardDeleteButton = styled.button`
  position: absolute;
  background-image: url(${trashCanIcon});
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #FB8D0B;
  right: 1em;
  padding: 1em;
  width: 40px;
  height: 40px;
  border-radius: .4em;
  border:none;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0px 0px 0px 0px rgba(179,179,179,1);
  z-index: 1;

  &:hover, &:focus{
    border-shadow: 1px;  
    width: 60px;
    border-radius: .5em;
  }

  &:active{
    box-shadow: inset 3px 4px 5px 0px rgba(224,121,3,1), inset -3px -4px px 0px rgba(247,195,136,1);
  }
`


function TinyCard ({name, status, issue, link, handleClick, secondsToAppear}){  
    return (
    <Card tabIndex={0} secondsToAppear={secondsToAppear}>
      <CardHeader>
          <CardTitle>{name}</CardTitle>
         {handleClick && <CardDeleteButton name={name}  onClick={handleClick}/>}
      </CardHeader>
      <CardSection>
        <SecundaryText title='status: '>{status}</SecundaryText>
        <SecundaryText title='Falla: '>{issue}</SecundaryText>
        <SecundaryText title='Link: '><a href='http://google.com'>{link}</a></SecundaryText>
      </CardSection>
    </Card>
  )}

export default TinyCard