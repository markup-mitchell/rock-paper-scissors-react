import React from 'react';
import styled from 'styled-components';

import rules from '../images/image-rules.svg';

const StyledDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 5;
`;

const Rules = () => {
  return (
    <StyledDiv>
      <RulesBox>
        <img src={rules} alt="" />
      </RulesBox>
    </StyledDiv>
  );
};

export default Rules;
