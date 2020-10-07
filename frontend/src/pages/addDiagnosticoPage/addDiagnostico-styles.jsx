import React from "react";
import styled from "styled-components";

export const Page = styled.div`
  padding: 1em;
`;
export const Container = styled.div`
  padding: 1em;
  background: #dcdbdb;
  transition: 0.3s;
  border-radius: 20px;
  height: fit-content;
`;

export const Wrapper = styled.div`
  padding: 0.4em;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  background-color: white;
`;

export const Span = styled.button`
  padding: 0.6em;
  font-size: 1em;
  font-weight: ${(props) => (props.bold ? props.bold : "400")};
  color: ${(props) => (props.bold ? "black" : "#777777")};
  cursor: pointer;
  border: none;
  background: white;
  border-radius: 10px;

  &:hover {
    background: #f0efef;
  }
`;

export const Grid = styled.div`
display: grid;
grid-gap: 0.5em;
grid-template-columns: repeat(auto-fill, minmax(9em, 10em));
justify-content: center;
`;


const SectionHeader = styled.header``;

const SectionTitle = styled.h1``;

const SectionComment = styled.span`
  font-size: 14px;
  margin: 1em 0;
  color: #909090;
  `;

const SectionCommentAproved = styled.span`
  font-size: 14px;
  color: #018c0a;
  font-weight: bold;
  border-radius: 1.5em;
  margin: 1em 0;
  background: #ebffec;
  padding: 0.4em;
`;

const SectionCommentUnaproved = styled.span`
  font-size: 14px;
  color: #d10404;
  font-weight: bold;
  padding: 0.4em;
  margin: 1em;
  border-radius: 1.5em;
  background: #fccaca;
`;

const SectionBody = styled.section`
  display: grid;
  grid-gap: 1em;
  grid-area: ${props => props.gridArea ? props.gridArea : ''};
`;

const SectionFooter = styled.div`
  padding: 0.4em 0;
`;


export function Section({
  children,
  title,
  comment,
  commentAproved,
  commentUnaproved,
  gridArea
}) {
  return (
    <SectionBody gridArea={gridArea}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      {children}
      <SectionFooter>
        {comment && <SectionComment>{comment}</SectionComment>}

        {commentAproved && (
          <SectionCommentAproved>{commentAproved}</SectionCommentAproved>
        )}
        {commentUnaproved && (
          <SectionCommentUnaproved>{commentUnaproved}</SectionCommentUnaproved>
        )}
      </SectionFooter>
    </SectionBody>
  );
}

export function SideChooser({ steps, position, handleClick }) {
  return (
    <Wrapper>
      {steps.map(({ id, step }) => (
        <Span
          key={id}
          bold={step === position && "bold"}
          onClick={() => handleClick(step)}
        >
          {step}
        </Span>
      ))}
    </Wrapper>
  );
}


