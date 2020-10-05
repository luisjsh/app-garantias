import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border-radius: 1.5em;
    border:none;
    cursor:pointer;
    transition 0.2s;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-area: ${props => props.gridArea ? props.gridArea : ''};

    ${(props) => {
      switch (props.role) {
        case "primary":
          return `
                    padding: 1em 3em;
                    color: white;
                    background: #FF6B00;
                
                    &:hover, &:focus{
                        background: #DF5E00;
                    }
                `;
        case "secundary":
          return `
                    padding: 1em 3em;
                    color: #FF6B00;
                    background: white;

                    &:hover, &:focus{
                        background: #E4E4E4;
                    }
                `;

        case "delete":
          return `
                    padding: 1em 3em;
                    color: red;
                    background: white;

                    &:hover, &:focus{
                        background: #E4E4E4;
                    }
                `;

        case "APROBADO":
          return `
                    padding: 2em;
                    color: #018c0a;
                    background: #ebffec;

                    &:hover, &:focus{
                        background: #a3ffbd;
                    }
                `;

        case "DESAPROBADO":
          return `
            padding: 2em;
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
