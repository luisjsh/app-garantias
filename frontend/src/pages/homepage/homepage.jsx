import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {useLazyQuery} from '@apollo/client'

import {GET_USER} from '../../graphql/queries/user-queries'
import userRoleValidation from '../../services/userRoleValidations'

import LoadingPage from '../loading-page/loading-page'
import GuestPage from './role-pages/guestPages'
import AdminPage from './role-pages/adminPage'


function Homepage({user, authInfo}) {
    let [getUser, {loading, data}] = useLazyQuery(GET_USER)
  
    const fetchUser=()=>{
        if(!loading){getUser()}
    }

    const setUser=()=>{
        if(data){
            if(data.user){
                authInfo(data.user);
                userRoleValidation(data.user.user)
            }
        }
    }

    useEffect(setUser, [data])

    if(!user){
        fetchUser()
        return <LoadingPage/>
    }


    if(user.role === 'Guest') return (
        <GuestPage />
    )

    if(user.role === 'Admin') return (
        <AdminPage />
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
export default connect(mapStatetoProps, mapDispatchtoProps) (withRouter(Homepage));
