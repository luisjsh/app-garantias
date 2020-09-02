import React from 'react'

import {Section, Title, Button, ButtonSection} from '../addreportpage-styles'

import CustomInput from '../../../components/custom-input/custom-input'
import CustomTextArea from '../../../components/text-area/text-area'

function ProblemInformation({formValues, handleClick, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <Section>
                <Title>Problemas presentados</Title>
                    <CustomTextArea name='reportIssue' label='Problema' value={formValues.reportIssue} handleChange={handleChange}/>
                    <CustomInput name='reportComments' label='Comentarios' value={formValues.reportComments} handleChange={handleChange}/>
                    <CustomTextArea name='reportGeneralDescription' label='Descripcion general' value={formValues.reportGeneralDescription} handleChange={handleChange}/>
                <ButtonSection>
                    <Button role='secundary' onClick={handleClick} content='003C'/>
                    <Button role='primary' content='003E'/>
                </ButtonSection> 
            </Section>
        </form>
    )
}

export default ProblemInformation