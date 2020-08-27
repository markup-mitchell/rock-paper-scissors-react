import React from 'react';
import styled from 'styled-components';

import ChoiceButton from './ChoiceButton';
import triangle from '../images/bg-triangle.svg';

const StyledDiv = styled.div`
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    padding: 6.4rem;
    width: 60%;
  }
  @media (min-width: 700px) {
    width: 476px;
    height: 430px;
  }

  .absolute {
    position: absolute;
  }

  .paper {
    top: 0;
    left: 0;
  }
  .scissors {
    top: 0;
    right: 0;
  }
  .rock {
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
  }
`;

const PlayerChoose = ({
  handlePlayerChoice,
  choice: { rock, paper, scissors }
}) => {
  return (
    <StyledDiv>
      <img src={triangle} alt="" />
      <div className="rock absolute">
        <ChoiceButton choice={rock} handler={handlePlayerChoice} />
      </div>
      <div className="paper absolute">
        <ChoiceButton choice={paper} handler={handlePlayerChoice} />
      </div>
      <div className="scissors absolute">
        <ChoiceButton choice={scissors} handler={handlePlayerChoice} />
      </div>
    </StyledDiv>
  );
};

export default PlayerChoose;
