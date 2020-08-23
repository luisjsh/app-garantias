import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    Nav,
    Logo,
    LogOut,
    PositionTag,
    RedirectSection
        } from './navbar-styles'

function Navbar(){
    return (
        <Nav>
            <Logo/>
                <RedirectSection>
                    <PositionTag icon='home-primary'>Inicio</PositionTag>
                    <PositionTag icon='profile-primary'>Perfil</PositionTag>
                </RedirectSection>
            <LogOut/>
        </Nav>
    )
}

export default withRouter(Navbar);
