import React, {useState} from 'react'
import {useQuery} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {GET_REPORTS_CONDITION} from '../../../graphql/queries/user-queries'

import {Page, Header, Section} from '../homepage.styles'
import LoadingPage from '../../loading-page/loading-page'
import ErrorPage from '../../errorpage/errorpage'
import Card from '../../../components/card/card'
import CustomSelect from '../../../components/custom-select/custom-select'

function SoportePage({history}) {

    let [condition, setCondition] = useState('Esperando revisión')

    let {loading, error, data} = useQuery(GET_REPORTS_CONDITION, {
        variables: {
            condition
        }
    })

    const formHandler = (event)=>{
        const {value} = event.target
        setCondition(value)
    }

    if(loading) return <LoadingPage/>
    
    if(error) return <ErrorPage />
      
    if(data){
        if(data.reportsConditional) return (
            <Page >
                <Header>Reportes por solventar
                    <CustomSelect 
                    handleChange={formHandler}
                    /></Header>
                <Section>
                {
                    data.reportsConditional.map( ({report}, ID)=>(
                        <Card key={ID} handleClick={()=>history.push(`/app/report/${report.id}`)} title={report.issue}>
                            {report.description}
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

export default withRouter(SoportePage)