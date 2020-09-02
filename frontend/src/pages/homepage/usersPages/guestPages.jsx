import React from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_REPORTS} from '../../../graphql/queries/user-queries'

import {Page, Header, Section} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Title from '../../../components/title/title'
import Card from '../../../components/card/card'

function Guestpages({history}) {
    const {loading, error, data} = useQuery(GET_REPORTS)

    let info = [{
        issue: 'aa',
        problem: `coyo menol yo ke zeSAKDNASKJDNASD
        ASDNAKSJDNASKJDNASKJDNASKJDNASKJNDKASJNDAKSJDN
        KJASNDKJASDNKASJDNAKJSDNAKJSDN`
    },{
        issue: 'aa',
        problem: 'coyo menol yo ke ze'
    },{
        issue: 'aa',
        problem: 'coyo menol yo ke ze'
    },{
        issue: 'aa',
        problem: 'coyo menol yo ke ze'
    },{
        issue: 'aa',
        problem: 'coyo menol yo ke ze'
    }]

    
    if(loading) return <LoadingPage/>

    if(error) return <ErrorPage error={error}/>
      
    if(data){
        if(data.Reports) return (
            <Page >
                <Header>Reportes</Header>
                <Section>
                {
                    data.Reports.map( ({issue}, id)=>(
                        <Card key={id}>
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
            <Header>Reportes</Header>
            <Section>
            {
                info.map( ({issue, problem}, id)=>(
                    <Card key={id} title={issue}>
                        {problem}
                    </Card>
                ))
            }
            </Section>
        </Page>
    )
}

export default withRouter(Guestpages)