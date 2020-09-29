import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Page, Section } from "./addreportpage-styles";

import Counter from "./counter";
import Notification from "../../components/notification/notification";

import Userinformation from "./form-steps/userInformation";
import DeviceInformation from "./form-steps/deviceInformation";
import ProblemInformation from "./form-steps/problemInformation";
import InvoiceInformation from "./form-steps/invoiceInformation";

function AddReportPage({ token, setBadNotification, history }) {
  let [formValues, setFormValues] = useState({
    username: "",
    dni: "",
    address: "",
    phoneNumber: "",
    deviceBrand: "",
    deviceModel: "",
    deviceSerialNumber: "",
    deviceStatus: "Esperando confirmacion",
    reportIssue: "",
    reportComments: "",
    reportGeneralDescription: "",
    invoiceNumber: "",
    invoiceFiles: [],
  });

  let [formStep, setFormStep] = useState("user");

  let formHandler = (event) => {
    let { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const fileHandler = (event) => {
    if (event.target.files === undefined) return false;
    setFormValues({ ...formValues, invoiceFiles: [...event.target.files] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let {
      username,
      dni,
      address,
      phoneNumber,
      deviceBrand,
      deviceModel,
      deviceSerialNumber,
      deviceStatus,
      reportIssue,
      reportComments,
      reportGeneralDescription,
      invoiceNumber,
      invoiceFiles,
    } = formValues;

    let formData = new FormData();
    formData.append("name", username);
    formData.append("dni", dni);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("brand", deviceBrand);
    formData.append("model", deviceModel);
    formData.append("serialNumber", deviceSerialNumber);
    formData.append("status", deviceStatus);
    formData.append("issue", reportIssue);
    formData.append("comments", reportComments);
    formData.append("description", reportGeneralDescription);
    formData.append("invoiceNumber", invoiceNumber);

    if (invoiceFiles.length > 0) {
      for (let i = 0; i < invoiceFiles.length; i++) {
        formData.append("image", invoiceFiles[i]);
      }
    }

    try {
      await fetch("http://localhost:4000/file/report-upload", {
        method: "POST",
        headers: { authorization: token },
        body: formData,
      }).then(() => history.push("/app/homepage"));
    } catch (e) {
      setBadNotification("Error de conexion");
    }
  };

  return (
    <Page>
      <Notification />
      <Section>
        <Counter
          Steps={[
            { id: 1, step: "user" },
            { id: 2, step: "device" },
            { id: 3, step: "problem" },
            { id: 4, step: "invoice" },
          ]}
          currentStep={formStep}
          setFormSteps={setFormStep}
        />

        {formStep === "user" && (
          <Userinformation
            formValues={formValues}
            handleChange={formHandler}
            handleSubmit={() => setFormStep("device")}
          />
        )}
        {formStep === "device" && (
          <DeviceInformation
            formValues={formValues}
            handleChange={formHandler}
            handleClick={() => setFormStep("user")}
            handleSubmit={() => setFormStep("problem")}
          />
        )}
        {formStep === "problem" && (
          <ProblemInformation
            formValues={formValues}
            handleChange={formHandler}
            handleClick={() => setFormStep("device")}
            handleSubmit={() => setFormStep("invoice")}
          />
        )}
        {formStep === "invoice" && (
          <InvoiceInformation
            formValues={formValues}
            handleChange={formHandler}
            fileHandler={fileHandler}
            handleClick={() => setFormStep("problem")}
            handleSubmit={handleSubmit}
          />
        )}
      </Section>
    </Page>
  );
}

const mapDispatchtoProps = (dispatch) => ({
  authInfo: (token) => {
    dispatch({ type: "SET_TOKEN", payload: token });
  },
  setBadNotification: (data) => {
    dispatch({ type: "SET_BAD_NOTIFICATION", payload: data });
  },
});

const mapStatetoProps = ({ auth: { token } }) => {
  return {
    token,
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withRouter(AddReportPage));
