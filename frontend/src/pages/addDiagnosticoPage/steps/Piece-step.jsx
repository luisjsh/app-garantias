import React from "react";
import {useMutation} from '@apollo/client'

import {ADD_DIAGNOSIS_NEED_PIECES} from '../../../graphql/mutation/user-mutations'

import CustomInput from "../../../components/custom-input/custom-input";
import CustomButton from "../../../components/custom-button/custom-button";


function PieceStep({reportid, formData, formHandler}) {

  const [setDiagnosis] = useMutation(ADD_DIAGNOSIS_NEED_PIECES)

  const handleSubmit = (event)=>{
    event.preventDefault()
    let {issue, diagnosis, link} = formData
    setDiagnosis({
      variables: {
        reportid,
        diagnosis,
        status: "Esperando las piezas necesarias para su reparacion",
        issue,
        link
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput name="issue" label='Falla' handleChange={formHandler} value={formData.issue} required/>
      <CustomInput name='link' label="Link" handleChange={formHandler} value={formData.link} required/>
      <CustomButton role='primary'></CustomButton>
    </form >
  );
}

export default PieceStep;
