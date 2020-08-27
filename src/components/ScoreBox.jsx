import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const Header = styled.header`
  box-sizing: border-box;
  min-width: 0;
  margin-bottom: 100px;
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  border: solid 1.5px rgba(255, 255, 255, 0.28);
  border-radius: 0.5rem;
  padding: 1.2rem;
  @media (min-width: 700px) {
    padding: 1.8rem 2.4rem 1.8rem 3.3rem;
    border-radius: 1.5rem;
  }
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.56px;
  color: #2a45c2;
  align-self: stretch;
  padding: 1rem 2.4rem;
  @media (min-width: 700px) {
    padding: 1.6rem 4.7rem 1.5rem 4.8rem;
    font-size: 1.6rem;
  }
  span {
    font-size: 4rem;
    color: #565468;
    line-height: 1;
  }
  @media (min-width: 700px) {
    span {
      font-size: 6.4rem;
    }
  }
`;

const Logo = styled.img`
  align-self: center;
  width: 8.5rem;
  height: auto;
  padding: 1.2rem;
  @media (min-width: 700px) {
    width: auto;
    padding: 0;
  }
`;

const ScoreBox = ({ score }) => {
  return (
    <Header>
      <Logo src={logo} alt="" />
      <Score>
        SCORE
        <span>{score}</span>
      </Score>
    </Header>
  );
};

export default ScoreBox;
