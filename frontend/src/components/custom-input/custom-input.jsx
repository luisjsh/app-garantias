import React from "react";
import styled from "styled-components";

import LoadingIcon from "../img/input-verification/loading.svg";
import InvalidIcon from "../img/input-verification/invalid.svg";
import VerifiedIcon from "../img/input-verification/verified.svg";

import { rotate } from "../keyframes/keyframes";

const Input = styled.input`
  border: none;
  background: #909090;
  color: white;
  border-radius: 10px;
  padding: 0.8em;
  font-weight: bold;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background: #aaaaaa;
  }
`;

const Wrapper = styled.div`
  padding: 1.4em 0.1em;
  display: flex;
  position: relative;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  color: #909090;
  top: 0;
  transition: 0.3s;
  z-index: 0;

  ${Wrapper}:hover & {
    color: #808080;
  }

  ${Wrapper}:focus-within & {
    color: #808080;
  }
`;

const Round = styled.div`
  position: absolute;
  right: -2.2em;
  background: white;
  border-radius: 100%;
  width: 35px;
  height: 35px;
`;

const Loading = styled(Round)`
  background-image: url(${LoadingIcon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotate} 1s linear infinite;
`;

const Valid = styled(Round)`
  background: green;
  background-image: url(${VerifiedIcon});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Invalid = styled(Round)`
  background: red;
  background-image: url(${InvalidIcon});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Comment = styled.span`
  position: absolute;
  left: 0;
  font-size: 14px;
  bottom: -0.5em;
  color: #a1a2a7;
`;

function CustomInput({
  name,
  label,
  loading,
  handleChange,
  comment,
  ...otherProps
}) {
  return (
    <Wrapper margin={comment && "0 0 1.4em 0"}>
      {label ? <Label>{label}</Label> : ""}
      <Input name={name} onChange={handleChange} {...otherProps}></Input>

      {comment && <Comment>{comment}</Comment>}

      {loading === "" && <Loading />}
      {loading === "invalid" && <Invalid />}
      {loading === "valid" && <Valid />}
    </Wrapper>
  );
}

export default CustomInput;
