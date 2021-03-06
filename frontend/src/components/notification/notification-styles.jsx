import styled, { keyframes } from "styled-components";

import CancelIcon from "../img/input-verification/invalid.svg";

const appear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1em;
    }
`;

export const Page = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: auto;
  bottom: 1em;
  justify-content: left;
  align-items: left;
  z-index: 0;
`;

export const NotificationWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin: 0.2em;
  animation: ${appear} 1s;
  cursor: pointer;
`;

export const NotificationText = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 1em 3em;
  width: 10em;
  text-align: left;
  font-size: 1em;
  background: ${(props) => {
    switch (props.type) {
      case "fine":
        return "green";

      case "notfine":
        return "red";

      default:
        return "grey";
    }
  }};
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
  color: white;
`;

export const LeftSideForNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3em;
  background-color: ${(props) => {
    switch (props.type) {
      case "fine":
        return "green";

      case "notfine":
        return "red";

      default:
        return "grey";
    }
  }};
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  transition: 0.3s;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${NotificationWrapper}:hover & {
    padding: 0em 1em;
    background-image: url(${CancelIcon});
  }
`;
