import React, { useState } from 'react';
import styled from 'styled-components';
import ScoreBox from './ScoreBox';
import rules from '../images/image-rules.svg';
const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    width: 700px;
  }
`;

const RulesButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.8rem;
  padding: 1rem;
  border: solid thin white;
  color: white;
  font-weight: 600;
  letter-spacing: 2.5px;
  width: 12.8rem;
  margin-top: 8rem;
  @media (min-width: 700px) {
    position: absolute;
    bottom: 3.2rem;
    right: 3.2rem;
    margin-top: 0;
  }
`;

const TopHalf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Rules = styled.div`
  display: none;
  ${(p) => p.viewRules && 'display: flex;'}
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  opacity: 0.6;
`;

const RulesBox = styled.div`
  padding: 32px;
  background-color: white;
`;

// better to have a fn toggle a CSS class or to make the whole component conditional on state?

const Layout = ({ children, score }) => {
  let [viewRules, toggleRules] = useState(false);
  return (
    <LayoutWrapper>
      <Rules
        viewRules={viewRules}
        handleClose={() => toggleRules((viewRules = false))}
      >
        <RulesBox>
          <img src={rules} alt="" />
        </RulesBox>
      </Rules>
      <>
        <TopHalf>
          <ScoreBox score={score} />
          {children}
        </TopHalf>
      </>
      <RulesButton onClick={() => toggleRules((viewRules = true))}>
        RULES
      </RulesButton>
    </LayoutWrapper>
  );
};

export default Layout;
