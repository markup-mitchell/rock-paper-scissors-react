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
`;

const ChoiceButton = ({ onClick, choice: { name, icon } }) => {
  return (
    <StyledButton onClick={onClick} value={name}>
      <img src={icon} alt={name} />
    </StyledButton>
  );
};

export default ChoiceButton;
