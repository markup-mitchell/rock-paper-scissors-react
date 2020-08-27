import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${(p) => p.value === 'pending' && 'visibility: hidden;'}
  transition: all .5s;
  width: 13em;
  height: 13em;
  background-color: ${(p) => p.bg};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
  border: none;
  padding: 0;
  box-shadow: 0 0.6rem 0 ${(p) => p.bgShadow};
  img {
    pointer-events: none;
  }
  @media (min-width: 700px) {
    width: 20rem;
    height: 20rem;
  }
  &:after {
    transition: all 0.5s;
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, #dadada, #f3f3f3);
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    box-shadow: inset 0 5px 0 #babfd4;
    @media (min-width: 700px) {
      width: 15.2rem;
      height: 15.2rem;
      top: 2.4rem;
      left: 2.4rem;
      box-shadow: inset 0 0.8rem 0 #babfd4;
    }
  }
  img {
    z-index: 1;
  }
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0 5px 0 #babfd4;
  width: 10rem;
  height: 10rem;
  background-color: white;
`;

const ChoiceButton = ({ handler, choice: { name, icon, bg, bgShadow } }) => {
  return (
    <StyledButton onClick={handler} value={name} bg={bg} bgShadow={bgShadow}>
      {/* <InnerCircle> */}
      <img src={icon} alt={name} />
      {/* </InnerCircle> */}
    </StyledButton>
  );
};

export default ChoiceButton;
