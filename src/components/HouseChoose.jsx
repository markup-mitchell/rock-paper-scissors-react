import React, { useEffect } from 'react';
import styled from 'styled-components';

import ChoiceButton from './ChoiceButton';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

const HouseChoose = ({ playerChoice, houseChoice, handleChoice }) => {
  // useEffect(() => {
  //   handleChoice();
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleChoice();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      HouseChoose
      <StyledDiv>
        <ChoiceButton choice={playerChoice} />
        <ChoiceButton choice={houseChoice} handleChoice={handleChoice} />
      </StyledDiv>
    </>
  );
};

export default HouseChoose;
