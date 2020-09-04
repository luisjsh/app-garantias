import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import {
    Nav,
    Logo,
    LogOut,
    RedirectSection,
    Wrapper
        } from './navbar-styles'

function Navbar({user, history, match}){
    let {id} = match.params
    return (
        <Nav>
            <Logo/>
                <RedirectSection>
                    <Wrapper 
                        onClick={()=>history.push('/app/homepage')}
                        primary={ id === 'homepage' ? true : false}>
                        Inicio
                    </Wrapper>
                    <Wrapper 
                        onClick={()=>history.push('/app/profile')}
                        primary={ id === 'profile' ? true : false}>
                        Perfil                     
                    </Wrapper>
                    {
                        user.role === 'Admin' ?
                            <Wrapper 
                                onClick={()=>history.push('/app/users')}
                                primary={ id === 'Users' ? true : false}>
                                Usuarios                     
                            </Wrapper>
                            : ''
                    }
                </RedirectSection>
            <LogOut/>
        </Nav>
    )
}

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect (mapStatetoProps) (withRouter(Navbar));
