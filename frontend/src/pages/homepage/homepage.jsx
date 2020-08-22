import React from 'react';
import {connect} from 'react-redux'

function Homepage({user}) {
    console.log(user)
    return (
        <div>
            vsadas
        </div>
    )
}

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect(mapStatetoProps) (Homepage);
