import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 13em;
  height: 13em;
  background-color: ${(p) => p.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
  border: none;
  padding: 0;
  box-shadow: 0 0.6rem 0 ${(p) => p.bgShadow};
  img {
    pointer-events: none;
  }
  @media (min-width: 700px) {
    width: 20rem;
    height: 20rem;
  }
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0 5px 0 #babfd4;
  width: 10rem;
  height: 10rem;
  background-color: white;
`;

const ChoiceButton = ({ handler, choice: { name, icon, bg, bgShadow } }) => {
  return (
    <StyledButton onClick={handler} value={name} bg={bg} bgShadow={bgShadow}>
      <InnerCircle>{!icon ? null : <img src={icon} alt={name} />}</InnerCircle>
    </StyledButton>
  );
};

export default ChoiceButton;
