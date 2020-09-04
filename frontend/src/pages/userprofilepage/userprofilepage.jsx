import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import styled from 'styled-components'

import {GET_USER_ID} from '../../graphql/queries/user-queries'

import {Page, Header} from '../homepage/homepage.styles'
import LoadingPage from '../loading-page/loading-page'
import CustomSelect from '../../components/custom-select/custom-select'

function UserProfile({user, match}) {
    let {profileId} = match.params
    
    let {loading, data} = useQuery(GET_USER_ID, {
        variables: {id: profileId}
    })

    if(loading) return <LoadingPage />

    if(data){
        if(data.userId) return(
            <Page>
                Email:{data.userId.email}
                Rol:{data.userId.role ? data.userId.role : ''}
                <CustomSelect />
            </Page>
        )
    }

    return (
        <Page>
            asdlasdjkn
            <CustomSelect />

        </Page>
    )
}

const mapStatetoProps =({user: {user}})=>{
    return{
        user
    }
}

export default connect(mapStatetoProps)(withRouter(UserProfile));
