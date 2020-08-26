import React from 'react';
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

const Outcome = ({ playerChoice, houseChoice, playAgain }) => {
  let outcome = () => {
    switch (true) {
      case playerChoice === houseChoice:
        return 'draw';
      case (playerChoice === 'rock' && houseChoice === 'scissors') ||
        (playerChoice === 'paper' && houseChoice === 'rock') ||
        (playerChoice === 'scissors' && houseChoice === 'paper'):
        return 'you win';
      case (playerChoice === 'rock' && houseChoice === 'paper') ||
        (playerChoice === 'paper' && houseChoice === 'scissors') ||
        (playerChoice === 'scissors' && houseChoice === 'rock'):
        return 'you lose';
      default:
        return 'error';
    }
  };
  return (
    <StyledDiv>
      {outcome()}
      <Button onClick={playAgain}>play again?</Button>
    </StyledDiv>
  );
};

export default Outcome;
