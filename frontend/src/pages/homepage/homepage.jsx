import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import LoadingPage from '../loading-page/loading-page'
import GuestPage from './role-pages/guestPages'
import AdminPage from './role-pages/adminPage'
import Garantiaspage from './role-pages/garantiasPage';


function Homepage({user, authInfo}) {
  

    if(!user){
        return <LoadingPage/>
    }


    if(user.role === 'Guest') return (
        <GuestPage />
    )

    if(user.role === 'Garantias') return (
        <Garantiaspage />
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
