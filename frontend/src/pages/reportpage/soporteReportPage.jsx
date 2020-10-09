import React from 'react' 
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import {Page, 
        Header,
        Section, 
        ButtonSection,
        ReportNumberText} from './reportpage-styles'

import Title from '../../components/title/title'
import Aside from '../../components/aside/aside'
import Card from '../../components/tiny-card/tiny-card'
import DropdownMenu from '../../components/dropdown-menu/dropdown-menu'
import SecundaryText from '../../components/secundary-text/secundary-text'
import CustomButton from '../../components/custom-button/custom-button'

const ClickableAside = styled.div`
    background: white;
    padding: .4em;
    border-radius: 10px;

    ${Title}:hover &{
        background-color: brown;
    }
`

const Grid = styled.div`
    display:grid;
    grid-gap: 1em;
`


function SoporteReportPage({data, history, params}) {
    return (
        <Page>
            <Header>
                <Title padding='0'>Reporte #</Title>
                <ReportNumberText>{data.report.invoice}</ReportNumberText>
                <DropdownMenu 
                    options={
                        [{id: 1, handleClick: ()=>{
                            
                        }, name: 'Editar'},
                        {id: 2, handleClick: ()=>{

                        }, name: 'Borrar'

                        }]
                    }
                />
            </Header>
            <Section>
                <Title padding='0'>Estado Actual </Title><ReportNumberText>{data.report.device.status}</ReportNumberText>
                <SecundaryText name='deviceModel' title='Equipo: '>{data.report.device.brand} {data.report.device.model}</SecundaryText>
                <SecundaryText name='reportIssue' title='Problema:'>{data.report.issue}</SecundaryText>
                <SecundaryText name='reportGeneralDescription' title='Descripción del equipo:'>{data.report.description}</SecundaryText>
            </Section>
            <Aside title='Piezas necesarias'>
                <Grid>
                {
                    data.report.device.pieces.map( ({id, name, status, issue, link}, i) =>(                   
                        <Card key={id} name={name} secondsToAppear={i} status={status} issue={issue} link={link} />
                    ))
                }
                </Grid>
            </Aside>
            <ButtonSection>
                <CustomButton role='primary' onClick={()=>history.push(`/app/create/diagnostico/${params}`)}>Realizar Diagnostico</CustomButton>
            </ButtonSection>
        </Page>
    )
}

export default withRouter(SoporteReportPage)