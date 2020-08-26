import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 5.6rem;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  color: black;
  background-color: white;
`;

const Outcome = ({ playerChoice, houseChoice, playAgain, incrementScore }) => {
  let [outcome, updateOutcome] = useState(null);
  useEffect(() => {
    switch (true) {
      case playerChoice === houseChoice:
        updateOutcome((outcome = 'draw'));
        break;
      case (playerChoice === 'rock' && houseChoice === 'scissors') ||
        (playerChoice === 'paper' && houseChoice === 'rock') ||
        (playerChoice === 'scissors' && houseChoice === 'paper'):
        updateOutcome((outcome = 'you win'));
        incrementScore();
        break;
      case (playerChoice === 'rock' && houseChoice === 'paper') ||
        (playerChoice === 'paper' && houseChoice === 'scissors') ||
        (playerChoice === 'scissors' && houseChoice === 'rock'):
        updateOutcome((outcome = 'you lose'));
        break;
      default:
        updateOutcome((outcome = 'error'));
        break;
    }
  }, []);

  return (
    <StyledDiv>
      {outcome}
      <Button onClick={playAgain}>play again?</Button>
    </StyledDiv>
  );
};

export default Outcome;
