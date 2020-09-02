import React from 'react'

import {Section, Title, Button} from '../addreportpage-styles'

import CustomInput from '../../../components/custom-input/custom-input'

function Userinformation({formValues, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <Section>
                <Title>Datos del Usuario</Title>
                <CustomInput name='username' label='Nombre' value={formValues.username} handleChange={handleChange}/>
                <CustomInput name='dni' label='Ruc' value={formValues.dni} handleChange={handleChange} pattern="[0-9]{11}" inputMode="numeric"/>
                <CustomInput name='address' label='Direccion' value={formValues.address} handleChange={handleChange}/>
                <CustomInput name='phoneNumber'label='Numero de telefono' value={formValues.phoneNumber} handleChange={handleChange} />
                <Button role='primary' content='003E'/>
            </Section>
        </form>
    )
}

export default Userinformation