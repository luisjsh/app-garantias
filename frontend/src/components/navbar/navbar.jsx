import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    Nav,
    Logo,
    LogOut,
    PositionTag,
    RedirectSection,
    Wrapper
        } from './navbar-styles'

function Navbar({history, match}){
    let {params} = match
    console.log(params)

    return (
        <Nav>
            <Logo/>
                <RedirectSection>
                    <Wrapper
                            icon={params.id === 'homepage' ? 'home-primary' : 'home-secundary'}
                        >
                        <PositionTag 
                            icon={params.id === 'homepage' ? 'home-primary' : 'home-secundary'}
                            onClick={()=>history.push('/app/homepage')}
                        />
                    </Wrapper>

                    <Wrapper
                        icon={params.id === 'profile' ? 'profile-primary' : 'profile-secundary'} 
                        >
                        <PositionTag 
                            icon={params.id === 'profile' ? 'profile-primary' : 'profile-secundary'} 
                            onClick={()=>history.push('/app/profile')}
                            />
                    </Wrapper>
                </RedirectSection>
            <LogOut/>
        </Nav>
    )
}

export default withRouter(Navbar);
