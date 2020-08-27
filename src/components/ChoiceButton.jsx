import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 13em;
  height: 13em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
  border: none;
  padding: 0;
  img {
    pointer-events: none;
  }
  @media (min-width: 700px) {
    width: 20rem;
    height: 20rem;
  }
`;

const ChoiceButton = ({ handler, choice: { name, icon } }) => {
  return (
    <StyledButton onClick={handler} value={name}>
      {!icon ? null : <img src={icon} alt={name} />}
    </StyledButton>
  );
};

export default ChoiceButton;
