import React, {useState} from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_REPORTS_CONDITION} from '../../../graphql/queries/user-queries'

import Notifications from '../../../components/notification/notification'
import {Page, Header, Section} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Card from '../../../components/card/card'
import CustomSelect from '../../../components/custom-select/custom-select'

function Garantiaspage({history}) {

    let [conditions, setCondition] = useState([{
        id: 1, condition: 'Esperando confirmación'}])

    let {loading, error, data} = useQuery(GET_REPORTS_CONDITION, {
        variables: {
            conditions
        }
    })

    const formHandler = (event)=>{
        const {value} = event.target
        setCondition(value)
    }

    console.log(data)

    if(loading) return <LoadingPage/>
    
    if(error) return <ErrorPage />
      
    if(data){
        if(data.reportsCondition) return (
            <Page >
                <Notifications />
                <Header>Reportes por evaluar
                    <CustomSelect 
                    handleChange={formHandler}
                    /></Header>
                <Section>
                {
                    data.reportsCondition.device.map( ({report}, ID)=>(
                        <Card key={ID} handleClick={()=>history.push(`/app/report/${report.id}`)} title={report.issue}>
                            {report.description}
                        </Card>
                    ))
                }
                </Section>
            </Page>
            )
    }
}

export default withRouter(Garantiaspage)