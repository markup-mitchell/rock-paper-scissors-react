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
    button {
      position: absolute;
      bottom: 3.2rem;
      right: 3.2rem;
    }
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
      <button>RULES</button>
    </LayoutWrapper>
  );
};

export default Layout;
