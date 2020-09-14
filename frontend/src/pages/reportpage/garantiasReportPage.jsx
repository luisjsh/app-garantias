import React, {useState} from 'react' 
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useMutation} from '@apollo/client'

import {Page, 
        Header,
        Section, 
        Title, 
        Aside,
        ButtonSection,
        ReportNumberText} from './reportpage-styles'

import {UPDATE_STATUS} from '../../graphql/mutation/user-mutations'


import SecundaryText from '../../components/secundary-text-with-images/secundary-text-with-images'
import CustomButton from '../../components/custom-button/custom-button'

function Garantiasreportpage({data, params}){

    const [setStatus] = useMutation(UPDATE_STATUS)

    const handleClick = async (status)=>{
        await setStatus({
           variables: {
               id: data.report.device.id,
               reportid: params,
               status: status
           }
        })
    }

    if(data){
        if(data.report) return (
            <Page>
                <Header>
                    <Title>Reporte Nro #<ReportNumberText>{params}</ReportNumberText> </Title>
                </Header>

                <Section>
                    <Title>Estado del reporte:<ReportNumberText>{data.report.device.status}</ReportNumberText> </Title>
                    <SecundaryText name='deviceModel' title='Equipo: '>{data.report.device.brand} {data.report.device.model}</SecundaryText>
                    <SecundaryText name='reportComments' title='Fecha de reporte: '>{data.report.createdAt}</SecundaryText> 
                    <SecundaryText name='reportIssue' title='Problema: '> {data.report.issue}</SecundaryText>
                    <SecundaryText name='reportGeneralDescription' title='Estado del equipo: '>{data.report.description}</SecundaryText>
                </Section>
                
                <Aside>
                    <Title>
                        Informacion de usuario
                    </Title>
                    <SecundaryText name='dni' title='Nombre: '>{data.report.personalinfo.name}</SecundaryText>
                    <SecundaryText name='address' title='Direccion: '>{data.report.personalinfo.address}</SecundaryText>
                    <SecundaryText name='phoneNumber' title='Numero de telefono: '> {data.report.personalinfo.phoneNumber}</SecundaryText>
                </Aside>

                <ButtonSection>
                    <CustomButton role='secundary' onClick={()=>handleClick("Rechazado")}>Rechazar</CustomButton>
                    <CustomButton role='primary' onClick={()=>handleClick("Esperando revisión")}>Recepcionar</CustomButton>
                </ButtonSection>
            </Page>
        )
    }
}

const mapStatetoProps = ({user: {user}})=>{
    return {
        user
    }
}

export default connect (mapStatetoProps) (withRouter(Garantiasreportpage))