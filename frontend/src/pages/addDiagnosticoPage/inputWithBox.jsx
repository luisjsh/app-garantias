import React from "react";
import styled from "styled-components";

import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";

const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 2.5fr 0.75fr 0.75fr;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  padding: 1em;
  text-align: center;
  transition: 0.3s;
`;

const Span = styled.button`
  padding: 1em;
  width: 100%;
  background: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 15px;
  transition: 0.1s;

  &:hover,
  &:focus {
    color: red;
    background: #ffe2e0;
  }
`;

const EmptyBox = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function InputWithBox({
  name,
  label,
  inputData,
  data,
  handleSubmit,
  handleClick,
  handleClickSpan,
  handleChange,
  ...otherProps
}) {
  return (
    <div>
        <Header>
          <CustomInput
            name={name}
            label={label}
            value={inputData}
            handleChange={handleChange}
            onKeyDown={(event)=>{
              if(event.keyCode === 13){
                handleSubmit(event)
              }
            }}
            {...otherProps}
          />
          <CustomButton role="primary" handleClick={handleSubmit}> Guardar</CustomButton>
          <CustomButton role="secundary" name={name} handleClick={handleClick}>
            Eliminar
          </CustomButton>
        </Header>
      <Box>
        {data.length > 0 ? (
          data.map(({ id, name }) => (
            <Span onClick={handleClickSpan} name={id} value={name} key={id}>
              {name}
            </Span>
          ))
        ) : (
          <EmptyBox />
        )}
      </Box>
    </div>
  );
}

export default InputWithBox;
