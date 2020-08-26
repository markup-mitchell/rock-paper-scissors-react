import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: purple;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScoreBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: pink;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <ScoreBox></ScoreBox>
        {children}
      </div>
      <button>RULES</button>
    </Wrapper>
  );
};

export default Layout;
