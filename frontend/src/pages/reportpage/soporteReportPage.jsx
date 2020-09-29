import React from 'react' 
import {withRouter} from 'react-router-dom'

import {Page, 
        Header,
        Section, 
        Title, 
        Aside,
        ButtonSection,
        ReportNumberText} from './reportpage-styles'



import SecundaryText from '../../components/secundary-text-with-images/secundary-text-with-images'
import CustomButton from '../../components/custom-button/custom-button'

function SoporteReportPage({data, history, params}) {
    return (
        <Page>
            <Header>
                <Title>Reporte # <ReportNumberText>{data.report.invoice}</ReportNumberText></Title>
            </Header>
            <Section>
                <Title>Estado Actual <ReportNumberText>{data.report.device.status}</ReportNumberText></Title>
                <SecundaryText name='deviceModel'>{data.report.device.brand} {data.report.device.model}</SecundaryText>
                <SecundaryText name='reportIssue'>{data.report.issue}</SecundaryText>
                <SecundaryText name='reportGeneralDescription'>{data.report.description}</SecundaryText>
            </Section>
            <Aside>
                'asda'
            </Aside>
            <ButtonSection>
                <CustomButton role='primary' onClick={()=>history.push(`/app/create/diagnostico/${params}`)}>Realizar Diagnostico</CustomButton>

                <CustomButton role='primary'>Submit</CustomButton>
            </ButtonSection>
        </Page>
    )
}

export default withRouter(SoporteReportPage)