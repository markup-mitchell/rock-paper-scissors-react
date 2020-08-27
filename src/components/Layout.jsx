import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 700px) {
    max-width: 700px;
    button {
      position: absolute;
      bottom: 3.2rem;
      right: 3.2rem;
    }
  }
`;

const ScoreBox = styled.div`
  margin-bottom: 100px;
  display: flex;
  padding: 1.2rem;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  text-align: left;
  line-height: 0.8;
  font-weight: bold;
  border: solid thin rgba(255, 255, 255, 0.28);
  border-radius: 0.5rem;
  color: white;
  h1 {
    font-size: 2.1rem;
    margin: 0;
    padding: 1.2rem;
  }
  .actual-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 0.5rem;
    font-size: 2.1rem;
    padding: 1rem 2.4rem;
    color: #2a45c2;
    p {
      font-size: 1rem;
      margin: 0;
    }
    span {
      font-size: 4rem;
      line-height: 4rem;
      color: #565468;
    }
  }
`;

const Layout = ({ children, score }) => {
  return (
    <LayoutWrapper>
      <div>
        <ScoreBox>
          <div className="flex-col">
            <h1>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
              <br />
            </h1>
          </div>
          <div className="actual-score">
            <p>SCORE</p>
            <span>
              {score}{' '}
              {
                // semantics?
              }
            </span>
          </div>
        </ScoreBox>
        {children}
      </div>
      <button>RULES</button>
    </LayoutWrapper>
  );
};

export default Layout;
