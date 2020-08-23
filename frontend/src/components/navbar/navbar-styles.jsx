import styled from 'styled-components'

import homePrimary from '../img/icon/navbar/home-primary.svg'
import homeSecundary from '../img/icon/navbar/home-secundary.svg'

import profilePrimary from '../img/icon/navbar/profile-primary.svg'
import profileSecundary from '../img/icon/navbar/profile-secundary.svg'

export const Nav = styled.aside`
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    height: 100%;
    width: 4em;
    background: white;
    border-right: 1px solid black;
    align-items: center;
    justify-items: center;
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
    border-radius: 100%;
    border: 5px solid red;   
`

export const RedirectSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

export const PositionTag = styled.div`
    width: 4em;
    height: 4em;
    background: url(${props => {
        switch(props.icon){
            case 'home':
                return homeSecundary

            case 'home-primary':
                return homePrimary
            
            case 'profile':
                return profileSecundary

            case 'profile-primary':
                return profilePrimary

            default: 
                return ''
        }}}) no-repeat;
    background-size: 60%;
    background-position: center;
`