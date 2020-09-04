import React from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_USERS} from '../../graphql/queries/user-queries'

import {Page, Section, Header} from '../homepage/homepage.styles'
import Card from '../../components/card/card'

function Userspage({history}) {

    let {data} = useQuery(GET_USERS)

    if(data){
        if(data.users)return(
            <Page>
                <Header>
                    Usuarios
                </Header>
                <Section>
                {
                    data.users.map(({id, email, role})=>(
                        <Card
                            handleClick={()=>history.push(`/app/user/${id}`)} 
                            key={id} 
                            title={email}>
                                {role ? role : ''}</Card>
                    ))
                }
                </Section>
            </Page>
        )
    }

    return (
        <Page>
            {
                
            }
        </Page>
    )
}

export default withRouter(Userspage)