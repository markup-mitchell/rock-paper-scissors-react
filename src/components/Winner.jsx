import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 56px;
  color: white;
  text-align: center;
`;

const Winner = ({ winner }) => {
  return <StyledText>{winner}</StyledText>;
};

export default Winner;
