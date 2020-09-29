import styled from 'styled-components'

import BurguerMenu from '../../components/img/icon/navbar/menu-burguer.svg'

export const Nav = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: .2fr 3.6fr .2fr;
    top: 0;
    width: 100%;
    align-items: center;
    justify-items: center;
    z-index: 1;
    background: white;
`

export const Logo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 5px solid orange;
`

export const LogOut = styled.button`
    width: 40px;
    height: 40px;
    background: url(${BurguerMenu}) no-repeat;
    background-size: 60%;
    background-position: center; 
    border: none;
    cursor: pointer;
    transition: .3s;

    &:hover, &:focus{
    }
`

export const RedirectSection = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-weight: ${props=>props.primary ? 'bold' : '400'};
    color: ${props=>props.primary ? 'black' : '#777777'};
    cursor: pointer;
    font-size: 20px;
    margin: 4px;
    transition: .3s; 
    padding: .2em;
    border-radius: 6px;
    background: white;


    &:hover, &:focus{
        background:  #F0EFEF;
    }
    
    `

