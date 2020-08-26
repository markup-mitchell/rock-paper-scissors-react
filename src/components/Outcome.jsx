import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5.6rem;
  color: white;
  font-weight: bold;
  width: min-content;
  white-space: nowrap;
  margin: 0 auto;
  > * + * {
    margin-top: 6.2rem;
  }
`;

const Button = styled.button`
  width: 100%;
  color: #3b4262;
  font-size: 1.6rem;
  font-weight: semi-bold;
  background-color: white;
  border-radius: 0.8rem;
  padding: 1.5rem;
  border: none;
  font-family: unset;
`;

const Outcome = ({ playerChoice, houseChoice, playAgain, incrementScore }) => {
  let [outcome, updateOutcome] = useState(null);
  useEffect(() => {
    switch (true) {
      case playerChoice === houseChoice:
        updateOutcome((outcome = 'DRAW'));
        break;
      case (playerChoice === 'rock' && houseChoice === 'scissors') ||
        (playerChoice === 'paper' && houseChoice === 'rock') ||
        (playerChoice === 'scissors' && houseChoice === 'paper'):
        updateOutcome((outcome = 'YOU WIN'));
        incrementScore();
        break;
      case (playerChoice === 'rock' && houseChoice === 'paper') ||
        (playerChoice === 'paper' && houseChoice === 'scissors') ||
        (playerChoice === 'scissors' && houseChoice === 'rock'):
        updateOutcome((outcome = 'YOU LOSE'));
        break;
      default:
        updateOutcome((outcome = 'error'));
        break;
    }
  }, []);

  return (
    <StyledDiv>
      {outcome}
      <Button onClick={playAgain}>PLAY AGAIN</Button>
    </StyledDiv>
  );
};

export default Outcome;
