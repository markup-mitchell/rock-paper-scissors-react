import React from 'react';
import styled from 'styled-components';

import ChoiceButton from './ChoiceButton';

const StyledDiv = styled.div`
  background-color: transparent;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const PlayerChoose = ({
  handlePlayerChoice,
  choice: { rock, paper, scissors }
}) => {
  return (
    <StyledDiv>
      <FlexBetween>
        <ChoiceButton choice={rock} handler={handlePlayerChoice} />
        <ChoiceButton choice={paper} handler={handlePlayerChoice} />
      </FlexBetween>
      <FlexCenter>
        <ChoiceButton choice={scissors} handler={handlePlayerChoice} />
      </FlexCenter>
    </StyledDiv>
  );
};

export default PlayerChoose;
