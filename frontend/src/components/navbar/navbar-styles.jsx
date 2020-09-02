import styled from 'styled-components'

import homePrimary from '../img/icon/navbar/home-primary.svg'
import homeSecundary from '../img/icon/navbar/home-secundary.svg'

import profilePrimary from '../img/icon/navbar/profile-primary.svg'
import profileSecundary from '../img/icon/navbar/profile-secundary.svg'

export const Nav = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    background: white;
    top: 0;
    width: 100%;
    align-items: center;
    z-index: 1;
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
    align-items: center;
    justify-content:center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    border-bottom: ${props => props.icon === 'home-primary' || props.icon === 'profile-primary' ? '  2px solid orange' : ''};
    color: ${props => props.icon === 'home-primary' || props.icon === 'profile-primary' ? 'orange' : 'black'}; 
    transition: .3s;  
    cursor: pointer;

    &:hover, focus{
        border-bottom: 2px solid #787676;
    }
    `


export const PositionTag = styled.div`
    width: 3em;
    height: 3em;
    background: url(${props => {
        switch(props.icon){
            case 'home-secundary':
                return homeSecundary

            case 'home-primary':
                return homePrimary
            
            case 'profile-secundary':
                return profileSecundary

            case 'profile-primary':
                return profilePrimary

            default: 
                return ''
        }}}) no-repeat;
    background-size: 60%;
    background-position: center;
`