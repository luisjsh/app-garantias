import React, { useState } from "react";
import { connect } from "react-redux";
import {useMutation} from '@apollo/client'

import {
  handleSubmitInputBox,
  handleClickTextInputBox,
  deleteFormData,
  handleTestClick,
} from "./Corregido-step-functions";

import {DATA, ACCESORIES} from "./data";

import {ADD_DIAGNOSIS_FIXED} from '../../../graphql/mutation/user-mutations'

import { Section, Grid } from "../addDiagnostico-styles";

import InputWithBox from "../inputWithBox";
import CustomInput from "../../../components/custom-input/custom-input";
import CustomButton from "../../../components/custom-button/custom-button";

function CorregidoStep({reportid, setBadNotification, formData, setFormData, formHandler }) {
  let [_DATA, setDATA] = useState({
    DATA: DATA,
    ACCESORIES: ACCESORIES
});

  const [setDiagnosis] = useMutation(ADD_DIAGNOSIS_FIXED)

  const handleSubmit = (event)=>{
    event.preventDefault()
    let {diagnosis, actionsCorrective, actionsAdditionalAdded, biosVersion, operativeSystem , recomendationsAdded} = formData
    let {DATA, ACCESORIES} = _DATA
    setDiagnosis({
      variables:{
        reportid: reportid,
        diagnosis,
        status: 'En espera de ser retirado por cliente',
        actionsCorrective,
        actionsAditional: actionsAdditionalAdded,
        testResults: DATA,
        biosVersion,
        operativeSystem,
        accesories: ACCESORIES,
        recomendations: recomendationsAdded
      }
    })
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section title="Acciones Realizadas">
        <CustomInput
          name="actionsCorrective"
          handleChange={formHandler}
          value={formData.actionsCorrective}
          label="Correctivas"
          required
        />
        <InputWithBox
          name="actionsAdditional"
          label="Adicionales (Opcional)"
          handleChange={formHandler}
          inputData={formData.actionsAdditional}
          handleSubmit={(event) =>
            handleSubmitInputBox(
              event,
              "Accion",
              "actionsAdditionalAdded",
              formData.actionsAdditionalAdded,
              formData.actionsAdditional,
              formData,
              setFormData,
              setBadNotification
            )
          }
          handleClick={(event) => deleteFormData(
            event,
            formData,
            setFormData
          )}
          handleClickSpan={(event) =>
            handleClickTextInputBox(
              event,
              "actionsAdditionalAdded",
              formData.actionsAdditionalAdded,
              formData,
              setFormData,
              setBadNotification
            )
          }
          data={formData.actionsAdditionalAdded}
        />
      </Section>

      <Section
        title="Resultado de pruebas"
        commentAproved="Aprobado"
        commentUnaproved="Reprobado"
      >
        <Grid>
          {_DATA.DATA.map(({ id, name, status }) => (
            <CustomButton
              name={id}
              role={status}
              key={id}
              handleClick={(event) => handleTestClick(event,_DATA,_DATA.DATA, 'DATA', setDATA)}
            >
              {name}
            </CustomButton>
          ))}
        </Grid>
      </Section>

      <Section title="Sistema operativo - BIOS">
        <CustomInput 
          name='biosVersion' 
          label="Version del BIOS" 
          value={formData.biosVersion} 
          handleChange={formHandler}
          required />
        <CustomInput 
          name='OperativeSystem' 
          label="Sistema operativo" 
          value={formData.OperativeSystem}          
          handleChange={formHandler}
          required />
      </Section>

      <Section
        title="Accesorios que se retorna al cliente"
        commentAproved="Aprobado"
        commentUnaproved="Reprobado"
      >
        <Grid>
        {_DATA.ACCESORIES.map(({ id, name, status }) => (
            <CustomButton
              name={id}
              role={status}
              key={id}
              handleClick={(event) => handleTestClick(event, _DATA ,_DATA.ACCESORIES, 'ACCESORIES' ,setDATA)}
            >
              {name}
            </CustomButton>
          ))}
        </Grid>
      </Section>

      <Section title="Recomendaciones">
        <InputWithBox
          name="recomendation"
          label="Recomendaciones (Opcional)"
          handleChange={formHandler}
          inputData={formData.recomendation}
          handleSubmit={(event) =>
            handleSubmitInputBox(
              event,
              "Recomendacion",
              "recomendationsAdded",
              formData.recomendationsAdded,
              formData.recomendation,
              formData,
              setFormData,
              setBadNotification
            )
          }
          handleClick={(event) => deleteFormData(
            event,
            formData,
            setFormData
          )}
          handleClickSpan={(event) =>
            handleClickTextInputBox(
              event,
              "recomendationsAdded",
              formData.recomendationsAdded,
              setBadNotification,
              formData,
              setFormData,
              setBadNotification
            )
          }
          data={formData.recomendationsAdded}
        />
      </Section>
      <CustomButton role="primary">
        Guardar
      </CustomButton>
    </form>
  );
}

const mapDispatchtoProps = (dispatch) => ({
  setBadNotification: (message) => {
    dispatch({ type: "SET_BAD_NOTIFICATION", payload: message });
  },
});

export default connect(null, mapDispatchtoProps)(CorregidoStep);
