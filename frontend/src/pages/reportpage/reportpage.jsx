import React from 'react'
import {withRouter} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {connect} from 'react-redux'

import styled from 'styled-components'

import {GET_REPORT_ALL_DATA} from '../../graphql/queries/user-queries'

import LoadingPage from '../loading-page/loading-page'

import GarantiasPage from './garantiasReportPage'
import SoportePage from './soporteReportPage'

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

function ReportPage({history, user, match}){
    let {reportNumber} = match.params
    
    const {loading, data} = useQuery(GET_REPORT_ALL_DATA, {
        variables: {
            id: reportNumber
        }
    })

    if (loading) return <LoadingPage />
    
    if(user){
        if(user.role === 'Garantias' || user.role === 'Admin')return(
            <GarantiasPage data={data} params={reportNumber} />
        )

        if(user.role === 'Soporte')return(
            <SoportePage data={data} params={reportNumber} />
        )
    }

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

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect (mapStatetoProps) (withRouter(ReportPage))