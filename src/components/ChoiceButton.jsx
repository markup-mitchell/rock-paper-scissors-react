import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  opacity: 1;
  ${(p) => p.value === 'pending' && 'opacity: 0;'}
  transition: opacity .2s;
  width: 13em;
  height: 13em;
  background-color: transparent;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2.4rem rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: box-shadow 0.2s;
  }
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
  border: none;
  padding: 0;
  img {
    pointer-events: none;
  }
  @media (min-width: 700px) {
    width: 20rem;
    height: 20rem;
  }
  &:after {
    transition: opacity 0.2s;
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
    @media (min-width: 700px) {
      width: 7.6rem;
    }
  }
`;

const OuterCircle = styled.div`
  box-shadow: 0 0.6rem 0 ${(p) => p.bgShadow};
  background-color: ${(p) => p.bg};
  border-radius: 50%;
`;

const ChoiceButton = ({ handler, choice: { name, icon, bg, bgShadow } }) => {
  return (
    <OuterCircle bg={bg} bgShadow={bgShadow}>
      <StyledButton onClick={handler} value={name}>
        {/* <InnerCircle> */}
        <img className="icon" src={icon} alt={name} />
        {/* </InnerCircle> */}
      </StyledButton>
    </OuterCircle>
  );
};

export default ChoiceButton;
