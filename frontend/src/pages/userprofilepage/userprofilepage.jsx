import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

const Page = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Grid = styled.div`
    position: relative;
    width: 100%;    
    height: 100%;
`

function UserProfile({user}) {
    return (
        <Page>
            <Grid>
            asdlasdjkn
            </Grid>
        </Page>
    )
}

const mapStatetoProps =({user: {user}})=>{
    return{
        user
    }
}

export default connect(mapStatetoProps)(UserProfile);
