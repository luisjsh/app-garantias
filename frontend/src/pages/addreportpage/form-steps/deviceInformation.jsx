import React from 'react'

import {Section, Title, Button, ButtonSection} from '../addreportpage-styles'

import CustomInput from '../../../components/custom-input/custom-input'

function DeviceInformation({formValues, handleClick, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <Section>
                <Title>Datos del Equipo</Title>
                <CustomInput name='deviceBrand' label='Marca' value={formValues.deviceBrand} handleChange={handleChange}/>
                <CustomInput name='deviceModel' label='Modelo' value={formValues.deviceModel} handleChange={handleChange}/>
                <CustomInput name='deviceSerialNumber' label='Numero de serie' value={formValues.deviceSerialNumber} handleChange={handleChange}/>
                <ButtonSection>
                <Button role='secundary' onClick={handleClick} content='003C'/> <Button role='primary' content='003E'/>
                </ButtonSection> 
            </Section>
        </form>
    )
}

export default DeviceInformation