import React, { useEffect } from 'react';
import styled from 'styled-components';

import ChoiceDisplay from './ChoiceDisplay';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .choice {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  margin-bottom: 6.2rem;
  p {
    margin-bottom: 0;
  }
  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;

const HouseChoose = ({ playerChoice, houseChoice, handleHouseChoice }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleHouseChoice();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <StyledDiv>
      <div className="choice">
        <ChoiceDisplay choice={playerChoice} />
        <p>YOU PICKED</p>
      </div>
      <div className="choice">
        <ChoiceDisplay choice={houseChoice} />
        <p>THE HOUSE PICKED</p>
      </div>
    </StyledDiv>
  );
};

export default HouseChoose;
