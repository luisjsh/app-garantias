import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import CustomButton from '../../components/custom-button/custom-button'

function Homepage({user}) {
    if(user.role === 'Guest') return <section style={{marginLeft: '5em'}}>
        Guest Homepage <CustomButton role='primary'> Realizar reporteAAAAAAAAAA</CustomButton>
    </section>
}

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect(mapStatetoProps) (Homepage);
