import React from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_ALL_REPORTS} from '../../../graphql/queries/user-queries'

import {Page, Header, Section} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Card from '../../../components/card/card'

function Garantiaspage({history}) {
    let {loading, error, data} = useQuery(GET_ALL_REPORTS)

    if(loading) return <LoadingPage/>
    
    if(error) return <ErrorPage />
      
    if(data){
        if(data.reports) return (
            <Page >
                <Header>Reportes</Header>
                <Section>
                {
                    data.reports.map( ({id, issue}, ID)=>(
                        <Card key={ID} handleClick={()=>history.push(`/app/report/${id}`)}>
                            {issue}
                        </Card>
                    ))
                }
                </Section>
            </Page>
            )
    }

    return (
        <Page>
            <Header>
                Reportes por evaluar
            </Header>
            <Section>

            </Section>
        </Page>
    )
}

export default withRouter(Garantiaspage)