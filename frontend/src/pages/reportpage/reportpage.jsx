import React from 'react'
import {withRouter} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import styled from 'styled-components'

import {GET_REPORT} from '../../graphql/queries/user-queries'

import LoadingPage from '../../pages/loading-page/loading-page'

const Page = styled.div`
    margin-top: 4%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    font-weight: bold;
`
const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`

function ReportPage({history, match}){
    let {reportNumber} = match.params
    
    const {loading, error, data} = useQuery(GET_REPORT, {
        variables: {
            id: reportNumber
        }
    })

    if (loading) return <LoadingPage />

    if(data){
        if(data.report) return (
            <Page>
                <Header>
                    <Title>Reporte Nro #</Title> {data.report.invoice} 
                </Header>
                <Section>
                    <Title>Estado del reporte:</Title>{data.report.device.status}
                    <Title>Equipo:</Title> {data.report.device.brand} {data.report.device.model}
                    <Title>Reportado:</Title> {data.report.createdAt}
                    <Title>Problema:</Title> {data.report.issue}
                    <Title>Estado del equipo:</Title>{data.report.description}
                </Section>
            </Page>
        )
    }
}

export default withRouter(ReportPage)