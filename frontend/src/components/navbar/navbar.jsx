import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {useLazyQuery} from '@apollo/client'

import ErrorHandler from '../../helper/errorHandler'

import {GET_USER} from '../../graphql/queries/user-queries'
import userRoleValidation from '../../services/userRoleValidations'


import {
    Nav,
    Logo,
    LogOut,
    RedirectSection,
    Wrapper
        } from './navbar-styles'

function Navbar({user, authInfo, history, match}){
    let {id} = match.params
    let [getUser, {loading, data}] = useLazyQuery(GET_USER)

    const fetchUser=()=>{
        if(!loading){getUser()}
    }

    const setUser=()=>{
        if(data){
            if(data.user){
                if(data.user.__typename === 'AuthMessage'){
                    ErrorHandler(data.user.message, history) 
                }
                if (data.user.__typename === 'AuthData'){
                    authInfo(data.user)
                    userRoleValidation(data.user.user)
                }
            }
        }
    }

    useEffect(setUser, [data])

    if(!data && !user){
        fetchUser()
    }

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

const mapDispatchtoProps = (dispatch)=>(
    {
        authInfo: (token)=>{dispatch({type:'SET_TOKEN', payload: token})},
        setBadNotification: (data)=>{dispatch({type:'SET_BAD_NOTIFICATION', payload:data})}
    }
)

export default connect (mapStatetoProps, mapDispatchtoProps) (withRouter(Navbar));
