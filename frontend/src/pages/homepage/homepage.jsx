import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import GuestPage from './usersPages/guestPages'

function Homepage({user, history}) {
    if(user.role === 'Guest') return (
        <GuestPage />
    )
}

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect(mapStatetoProps) (withRouter(Homepage));
