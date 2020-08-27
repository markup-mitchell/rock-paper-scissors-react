import React from 'react';
import styled from 'styled-components';
import ScoreBox from './ScoreBox';

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
  @media (min-width: 700px) {
    position: absolute;
    bottom: 3.2rem;
    right: 3.2rem;
  }
`;

const TopHalf = styled.div`
  width: 100%;
`;
const Layout = ({ children, score }) => {
  return (
    <LayoutWrapper>
      <TopHalf>
        <ScoreBox score={score} />
        {children}
      </TopHalf>
      <RulesButton>RULES</RulesButton>
    </LayoutWrapper>
  );
};

export default Layout;
