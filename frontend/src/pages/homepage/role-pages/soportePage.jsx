import React, {useState} from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import errorHandler from '../../../helper/errorHandler'

import {GET_REPORTS_CONDITION} from '../../../graphql/queries/user-queries'

import {Page, Header, Section, NoData} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Card from '../../../components/card/card'
import CustomSelect from '../../../components/custom-select/custom-select'

function SoportePage({history}) {

    let [conditions, setCondition] = useState([{
        id: 0, condition: "Esperando piezas"
    }, {id: 1, condition: "Esperando revision"}])

    let {loading, error, data} = useQuery(GET_REPORTS_CONDITION, {
        variables: {
            conditions
        }
    })

    const formHandler = (event)=>{
        const {value} = event.target
        setCondition(value)
    }

    if(loading) return <LoadingPage/>
    
    if(error) return <ErrorPage />
      
    if(data){
        if(data.AuthMessage) return errorHandler(data.AuthMessage.message, history)

        if(data.reportsCondition) return (
            <Page >
                <Header>Reportes por solventar
                    <CustomSelect 
                    handleChange={formHandler}
                    /></Header>
                <Section title='Esperando por piezas'>
                {
                    data.reportsCondition.device.length > 0 ? 
                    
                    data.reportsCondition.device.map( ({status, report}, ID)=>(
                         status === "Esperando piezas" &&
                          <Card key={ID} reportId={report.id} handleClick={()=>history.push(`/app/report/${report.id}`)} title={report.issue}>
                            {report.description}
                            </Card>
                    )):
                    
                    <NoData />
                }
                </Section>
                <Section title='Esperando por revision'>
                {
                    data.reportsCondition.device.length > 0 ? 
                    
                    data.reportsCondition.device.map( ({status, report}, ID)=>(
                         status === "Esperando revision" &&
                          <Card key={ID} reportId={report.id} handleClick={()=>history.push(`/app/report/${report.id}`)} title={report.issue}>
                            {report.description}
                            </Card>
                    )):
                    
                    <NoData />
                }
                </Section>
                <Section title='Esperando por revision'>
                {
                    data.reportsCondition.device.length > 0 ? 
                    
                    data.reportsCondition.device.map( ({status, report}, ID)=>(
                         status === "Esperando revisian" &&
                          <Card key={ID} handleClick={()=>history.push(`/app/report/${report.id}`)} title={report.issue} reportId={report.id}>
                            {report.description}
                            </Card>
                    )):
                    
                    <NoData />
                }
                </Section>
            </Page>
            )
    }
}

export default withRouter(SoportePage)