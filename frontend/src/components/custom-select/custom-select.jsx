import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
    border: none;
    background: #909090;
    color: white;
    border-radius: 18px;
    padding: .8em;
    width: 18em;
    transition: 0.3s;

    &:hover{
        background: #aaaaaa;
    }

`

function CustomSelect({handleChange, options, ...otherProps}) {
    return (
        <Select {...otherProps} onChange={handleChange}>
            <option value="0"> Por favor seleccione una de las siguientes </option>
            {
                options &&
                    options.map( ({id, optionName, optionValue})=>(
                    <option key={id} value={optionValue}>{optionName}</option>
                ))
            }
        </Select>
    )
}

export default CustomSelect