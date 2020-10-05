import React, { useState } from "react";
import {useMutation} from '@apollo/client'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import {ADD_DIAGNOSIS_NEED_PIECES} from '../../../graphql/mutation/user-mutations'

import errorHandler from '../../../helper/errorHandler'

import trashCanIcon from '../../../components/img/icon/trashCan.svg'

import { Section, SecundaryText } from '../addDiagnostico-styles'

import CustomInput from "../../../components/custom-input/custom-input";
import CustomButton from "../../../components/custom-button/custom-button";


const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "section aside"
  "section aside"
  "buttonSubmit aside";
  margin-top: 3px;
  grid-gap: .4em;

  @media (max-width: 670px){
    grid-template-areas: "section"
    "aside"
    "buttonSubmit";
  }
`

const Aside = styled.div`
  display: grid;
  grid-area: aside;
  padding: 1em;
  border-radius: 10px;
  overflow-y:auto;
  max-height: 450px;
  grid-gap: .5em;
  `

const AsideTitle = styled.h3`
`

const Card = styled.div`
  padding: .4em;
  display: flex;
  background: white;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 4px;
  flex-direction: column;
  height: fit-content;
  max-height: 3.5em;
  overflow: hidden;
  transition: .8s cubic-bezier(0.48, 0.81, 0.51, 1.02);
  outline: none;

  &:focus {
    background: #fcfcfc;
    border: 1px solid #FF6B00;
    max-height: 30em;
  }
  `

const CardSection = styled.div`
  display: block;
`


const CardTitle = styled.h3`
  margin: 0;
  color: grey;
  transition: .3s;
  ${Card}:hover &{
    color: #FF6B00;
  }

  ${Card}:focus &{
    color: #FF6B00;
    font-weight: bold;
  }
`
const CardHeader = styled.header` 
  position: relative;
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
`

const CardDeleteButton = styled.button`
  position: absolute;
  background-image: url(${trashCanIcon});
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #FB8D0B;
  right: 1em;
  padding: 1em;
  width: 40px;
  height: 40px;
  border-radius: .4em;
  border:none;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0px 0px 0px 0px rgba(179,179,179,1);
  z-index: 1;

  &:hover, &:focus{
    border-shadow: 1px;  
    width: 60px;
    border-radius: .5em;
  }

  &:active{
    box-shadow: inset 3px 4px 5px 0px rgba(224,121,3,1), inset -3px -4px px 0px rgba(247,195,136,1);
  }
`

function PieceStep({ reportid, diagnosis, reportData, setBadNofitication, setGoodNotification, history }) {

  const [AddedPieces, setAddedPieces] = useState(
    reportData ?
      reportData.report.device.pieces ? reportData.report.device.pieces : []
      : []
  )

  const [formValues, setFormValues] = useState({
    issue: '',
    link: '',
    name: ''
  })

  const [setParts] = useMutation(ADD_DIAGNOSIS_NEED_PIECES)

  const handleClickCard = (event) => {
    event.preventDefault()
    let { name } = event.target
    let ArrayWithoutSelected = AddedPieces.filter((item) => {
      return item.name !== name
    });

    setAddedPieces([...ArrayWithoutSelected]);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let { issue, link, name } = formValues

    let DifferentsFromInput = AddedPieces.filter((item) => {
      return item.name !== name && item.link !== link
    });

    if (AddedPieces.length !== DifferentsFromInput.length)
      return alert(`${name} agregada previamente`);

    setAddedPieces([
      ...AddedPieces,
      {
        id: AddedPieces.length + 1,
        name: name,
        status: 'En espera de pedido',
        link: link,
        issue: issue
      }
    ]);
  };

  const formHandler = (event) => {
    let { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleClick = async (event) => {
    event.preventDefault()

    try {
      let { data } = await setParts({
      variables: {
          reportid: reportid,
          diagnosis,
          status: "Esperando piezas",
          piece: AddedPieces
      }
    })
      if (data) {
        if (data.setParts) {
          if (data.setParts.message) return errorHandler(data.setParts.message, history)
          if (data.setParts.issue) return setGoodNotification('Almacenado con Exito')
        }
      }
    }
    catch (e) {
      setBadNofitication('Error de conexión')
    }
  }

  return (
    <Wrapper>
    <form onSubmit={handleSubmit}>
        <Section title='Ingrese los datos de la pieza necesaria' gridArea='section' comment='Por favor recuerde agregar un nombre y link distinto cada vez'>
          <CustomInput name="name" label='Nombre de la pieza' handleChange={formHandler} value={formValues.name} required />
          <CustomInput name="issue" label='Falla' handleChange={formHandler} value={formValues.issue} required />
          <CustomInput name='link' label="Link" handleChange={formHandler} value={formValues.link} required />
        </Section>
        <CustomButton role='secundary'>Agregar en lista</CustomButton>
    </form >
      <Aside>
        <AsideTitle>Piezas enlistadas</AsideTitle>
        {
          AddedPieces.length > 0 &&
          AddedPieces.map(({ id, name, status, issue, link }) => (
            <Card key={id} tabIndex={0}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDeleteButton name={name} onClick={handleClickCard} />
              </CardHeader>
              <CardSection>
                <SecundaryText title='status: '>{status}</SecundaryText>
                <SecundaryText title='Falla: '>{issue}</SecundaryText>
                <SecundaryText title='Link: '><a href='http://google.com'>{link}</a></SecundaryText>
              </CardSection>
            </Card>
          ))
        }

      </Aside>
      <CustomButton role='primary' gridArea='buttonSubmit' onClick={handleClick}>Guardar</CustomButton>
    </Wrapper>
  );
}

const mapDispatchtoProps = (dispatch) => (
  {
    setBadNofitication: (message) => { dispatch({ type: 'SET_BAD_NOTIFICATION', payload: message }) },
    setGoodNotification: (message) => { dispatch({ type: 'SET_GOOD_NOTIFICATION', payload: message }) }
  }
)

export default connect(null, mapDispatchtoProps)(withRouter(PieceStep));
