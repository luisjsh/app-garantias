import React from 'react'

import {Section, Title, Button, ButtonSection} from '../addreportpage-styles'

import CustomInput from '../../../components/custom-input/custom-input'
import CustomInputFile from '../../../components/custom-input-file/custom-input-file'

function InvoiceInformation({formValues, fileHandler, handleClick, handleChange, handleSubmit}){
    return (
        <form onSubmit={handleSubmit}>
            <Section>
                <Title>Datos de la Factura</Title>
                <CustomInput name='invoiceNumber' label='Numero de factura' value={formValues.invoiceNumber} handleChange={handleChange}/>
                <CustomInputFile name='invoiceFile' files={formValues.invoiceFiles} fileHandler={fileHandler} multiple />

                <ButtonSection>
                <Button role='secundary' onClick={handleClick} content='003C'/> <Button role='primary' content='003E'/>
                </ButtonSection> 
            </Section>
        </form>
    )
}

export default InvoiceInformation