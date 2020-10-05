import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {connect} from 'react-redux'

import { GET_REPORT_ALL_DATA } from "../../graphql/queries/user-queries";

import { Page, Container, SideChooser, SecundaryText } from "./addDiagnostico-styles";

import Notification from "../../components/notification/notification";
import CorregidoStep from "./steps/Corregido-step";
import PiecesStep from "./steps/Piece-step";

import CustomInput from "../../components/custom-input/custom-input";

function DiagnosticoPage({ match, history, user }) {
  let { reportNumber } = match.params;

  const [position, setPosition] = useState("");

  const [formData, setFormData] = useState({
    diagnosis: '',
    actionsCorrective: "",
    actionsAdditional: "",
    actionsAdditionalAdded: [],
    OperativeSystem: '',
    biosVersion: '',
    recomendation: "",
    recomendationsAdded: [],
    link: '',
    issue: ''
  });

  let { loading, error, data } = useQuery(GET_REPORT_ALL_DATA, {
    variables: {
      id: reportNumber,
    },
  });

  const formHandler = (event) =>{
    let {name, value} = event.target
    setFormData({...formData, [name]:value})
  }

  if(!user){
    history.push('/app/homepage')
  }

  if (error) return <Page>Error</Page>;

  if (loading) return <Page>loading</Page>;

  if (data) {
    if (data.report)
      return (
        <Page>
          <Notification />
          <h1>Reporte N#{data.report.invoice}</h1>
          <SecundaryText title='Equipo:'>{data.report.device.brand} {data.report.device.model}</SecundaryText>
          <SecundaryText title='Problema:'> {data.report.issue}</SecundaryText>
          <SecundaryText title='Descripcion:'> {data.report.description}</SecundaryText>
          
          <h1>Diagnostico</h1>
          <CustomInput name='diagnosis' label="Diagnostico Realizado" value={formData.diagnosis} handleChange={formHandler}/>

          <Container>
            <SideChooser
              steps={[
                {
                  id: "0",
                  step: "Corregido",
                },
                {
                  id: "1",
                  step: "Adquirir piezas",
                },
              ]}
              position={position}
              handleClick={(step) => setPosition(step)}
            />

            {position === "Corregido" && (
              <CorregidoStep reportid={reportNumber} formHandler={formHandler} formData={formData} setFormData={setFormData} />
            )}

            {position === "Adquirir piezas" && <PiecesStep reportid={reportNumber} reportData={data} diagnosis={formData.diagnosis} />}
          </Container>
        </Page>
      );
  }
}

const mapStatetoProps = ({user: {user}})=>{
  return {
    user
  }
}

export default connect(mapStatetoProps)(withRouter(DiagnosticoPage));
