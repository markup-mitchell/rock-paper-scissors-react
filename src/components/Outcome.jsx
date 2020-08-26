import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const Outcome = ({ playerChoice, houseChoice }) => {
  let outcome = () => {
    switch (true) {
      case playerChoice === houseChoice:
        return 'draw';
        break;
      case playerChoice === 'rock' && houseChoice === 'scissors':
        return 'player wins';
        break;
      case playerChoice === 'rock' && houseChoice === 'paper':
        return 'house wins';
        break;
      case playerChoice === 'paper' && houseChoice === 'rock':
        return 'player wins';
        break;
      case playerChoice === 'paper' && houseChoice === 'scissors':
        return 'house wins';
        break;
      case playerChoice === 'scissors' && houseChoice === 'paper':
        return 'player wins';
        break;
      case playerChoice === 'scissors' && houseChoice === 'rock':
        return 'house wins';
        break;
      default:
        return 'error';
    }
  };
  return <StyledDiv>{outcome()}</StyledDiv>;
};

export default Outcome;
