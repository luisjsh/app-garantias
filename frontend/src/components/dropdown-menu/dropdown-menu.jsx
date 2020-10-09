import React from 'react'
import styled from 'styled-components'

import Dots from '../img/icon/dropdown/dots.svg'

import CustomButton from '../custom-button/custom-button'

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    
    `
const ClickableTop = styled.button`
    width: 30px;
    height: 40px;
    background: url(${Dots}) no-repeat;
    background-size: 6px;
    border: none;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    
    ${Wrapper}:focus-within &{
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    
    ${Wrapper}:hover &{
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
`

const Menu = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1;
    grid-gap: .2em;
    right: 0;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: .4em;
    clip-path: circle(0% at 95% 0%);
    cursor: pointer;
    transition: .4s ease-in-out;

    ${Wrapper}:focus-within &{
        clip-path: circle(100%);
    }
    
    ${Wrapper}:hover &{
        clip-path: circle(100%);
    }
`
  

function DropdownMenu({options}) {
    return (
        <Wrapper>
            <ClickableTop />
            <Menu>
            {
                options && options.map( ({id, handleClick, name}) =>(
                    <CustomButton role='secundary' key={id} handleClick={handleClick}>{name}</CustomButton>
                ))
            }
            </Menu>
        </Wrapper>
    )
}

export default DropdownMenu
