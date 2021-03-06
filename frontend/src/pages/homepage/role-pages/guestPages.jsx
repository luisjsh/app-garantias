import React from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_REPORTS} from '../../../graphql/queries/user-queries'
import Notifications from '../../../components/notification/notification'

import {Page, Header, Section} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Card from '../../../components/card/card'

function Guestpages({history}) {
    const {loading, error, data} = useQuery(GET_REPORTS)    

    if(loading) return <LoadingPage/>

    if(error) return <ErrorPage error={error}/>
      
    if(data){
        if(data.userReports) return (
            <Page >
                <Notifications />
                <Header>Reportes</Header>
                <Section>
                {
                    data.userReports.map( ({id, issue}, ID)=>(
                        <Card key={ID} handleClick={()=>history.push(`/app/report/${id}`)}>
                            {issue}
                        </Card>
                    ))
                }
                </Section>
            </Page>
            )
    }

    
}

export default withRouter(Guestpages)