import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  opacity: 1;
  ${(p) => p.value === 'pending' && 'opacity: 0;'}
  transition: opacity .2s;
  width: 13em;
  height: 13em;
  background-color: transparent;
  outline: none;
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
    width: 29.2rem;
    height: 29.2rem;
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
      width: 22.4rem;
      height: 22.4rem;
      top: 3.5rem;
      left: 3.5rem;
      box-shadow: inset 0 1.1rem 0 #babfd4;
    }
  }
  img {
    z-index: 1;
    @media (min-width: 700px) {
      width: 9rem;
    }
  }
`;

// styled components then duplicate them. *sigh*
const OuterCircle = styled.div`
  box-shadow: 0 0.6rem 0 ${(p) => p.bgShadow};
  background-color: ${(p) => p.bg};
  border-radius: 50%;
  @media (min-width: 700px) {
    box-shadow: 0 1.3rem 0 ${(p) => p.bgShadow};
    margin-top: 6rem;
  }
`;

const ChoiceDisplay = ({ handler, choice: { name, icon, bg, bgShadow } }) => {
  return (
    <OuterCircle bg={bg} bgShadow={bgShadow}>
      <StyledDiv onClick={handler} value={name}>
        {/* <InnerCircle> */}
        <img className="icon" src={icon} alt={name} />
        {/* </InnerCircle> */}
      </StyledDiv>
    </OuterCircle>
  );
};

export default ChoiceDisplay;
