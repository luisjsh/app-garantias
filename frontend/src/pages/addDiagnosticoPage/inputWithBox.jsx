import React from "react";
import styled from "styled-components";

import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";

const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 2.5fr 0.75fr;
  grid-gap: .3em;

  @media (max-width: 658px){
    grid-template-columns:1fr;
    margin-bottom: 10px;
  }
`;

const Box = styled.div`
background: white;
border-radius: 10px;
transition: 0.3s;
padding: 1em;
display: grid;
grid-template-columns: repeat(4, 4fr);

@media (max-width: 658px){
  display: flex;
  flex-direction: column;
    text-align: center;
    justify-content: center;
  }
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
  padding: 4em;
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
          handleClick={handleClick}
            onKeyDown={(event)=>{
              if(event.keyCode === 13){
                handleSubmit(event)
              }
            }}
            {...otherProps}
          />
          <CustomButton role="primary" handleClick={handleSubmit}> Guardar</CustomButton>

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
