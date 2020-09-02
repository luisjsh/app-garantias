import React from 'react'
import styled from 'styled-components'

import invoiceFile from '../img/icon/invoiceFile.svg'

const InputFile = styled.input`
    display: none;
`

const Label = styled.label`
    border: none;
    background: #909090;
    color: white;
    border-radius: 18px;
    padding: .8em;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        background: #aaaaaa;
    }
`

const Wrapper = styled.div`
    display: flex;
    padding: 1em;
`

const Icon = styled.div`
    background: url(${ props =>{
        switch(props.name){
            
            case 'invoiceFile':
                return invoiceFile

           default:
                return ''
        }
    }}) no-repeat;
    background-size: 75%;
    background-position: center;
    width: 40px;
    height: 40px;
`


function CustomInputFile({name, files, fileHandler}){
    return (
        <Wrapper>
            <Icon name={name}/>
            <Label htmlFor='file'>Presione para agregar su factura</Label>
            <InputFile name={name} id='file' type='file' onChange={fileHandler} multiple />
            {
                files.map( (file, id) =>(
                    <span key={id}>{file.name}</span>
                ))
            }
        </Wrapper>
    )
}

export default CustomInputFile