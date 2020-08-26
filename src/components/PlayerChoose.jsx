import React from 'react';
import styled from 'styled-components';

import ChoiceButton from './ChoiceButton';

const StyledDiv = styled.div`
  background-color: red;
`;

const PlayerChoose = () => {
  return (
    <StyledDiv>
      <ChoiceButton choice={{ name: 'rock', icon: 'rock' }} />
    </StyledDiv>
  );
};

export default PlayerChoose;
