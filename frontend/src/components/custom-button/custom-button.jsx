import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 1em 3em;
    border-radius: 1.5em;
    border:none;
    cursor:pointer;
    transition 0.2s;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    ${(props) => {
      switch (props.role) {
        case "primary":
          return `
                    color: white;
                    background: #FF6B00;
                
                    &:hover, &:focus{
                        background: #DF5E00;
                    }
                `;
        case "secundary":
          return `
                    color: #FF6B00;
                    background: white;

                    &:hover, &:focus{
                        background: #E4E4E4;
                    }
                `;

        case "APROBADO":
          return `
                    color: #018c0a;
                    background: #ebffec;

                    &:hover, &:focus{
                        background: #a3ffbd;
                    }
                `;

        case "DESAPROBADO":
          return `
            color: #d10404;
            background: #fccaca;

            &:hover, &:focus{
                background: #ffabab;
            }      
          `;

        default:
          return ``;
      }
    }}
`;

function CustomButton({ handleClick, children, ...otherProps }) {
  return (
      <Button onClick={handleClick} {...otherProps}>
        {children}
      </Button>
  );
}

export default CustomButton;
