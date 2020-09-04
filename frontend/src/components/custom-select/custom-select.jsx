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

    &:focus{
        border-radius: 0;
        border-top-left-radius: 18px;
    }
`

function CustomSelect() {
    return (
        <Select>
            <option value="0">Select car:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
        </Select>
    )
}

export default CustomSelect