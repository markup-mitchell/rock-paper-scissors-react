import React, { useEffect } from 'react';
import styled from 'styled-components';

import ChoiceButton from './ChoiceButton';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

const HouseChoose = ({ playerChoice, houseChoice, handleHouseChoice }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleHouseChoice();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      HouseChoose
      <StyledDiv>
        <ChoiceButton choice={playerChoice} />
        <ChoiceButton
          choice={houseChoice}
          handleHouseChoice={handleHouseChoice}
        />
      </StyledDiv>
    </>
  );
};

export default HouseChoose;
