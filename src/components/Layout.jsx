import React, { useState } from 'react';
import styled from 'styled-components';
import ScoreBox from './ScoreBox';
import rules from '../images/image-rules.svg';
import iconClose from '../images/icon-close.svg';

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
  position: absolute;
  bottom: 3.2rem;
  @media (min-width: 700px) {
    margin-top: 8rem;
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

const RulesLayout = styled.div`
  display: none;
  ${(p) => p.viewRules && 'display: flex;'}
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

const Darkscreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
`;

const RulesImage = styled.section`
  position: fixed;
  z-index: 6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: white;
  border-radius: 0.8rem;
  h1 {
    font-size: 3.2rem;
    font-weight: semi-bold;
    line-height: 3.2rem;
    margin: 0;
    color: #3b4262;
  }
  .rules {
    padding: 4.8rem 1.8rem 0;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background: transparent;
    border: none;
  }
`;

// better to have a fn toggle a CSS class or to make the whole component conditional on state?

const Layout = ({ children, score }) => {
  let [viewRules, setRules] = useState(false);
  const toggleRules = () => setRules((viewRules = !viewRules));
  return (
    <LayoutWrapper>
      <>
        <TopHalf>
          <ScoreBox score={score} />
          {children}
        </TopHalf>
      </>
      <RulesButton onClick={toggleRules}>RULES</RulesButton>
      <RulesLayout viewRules={viewRules}>
        <Darkscreen />
        <RulesImage>
          <div>
            <h1>RULES</h1>
            <button aria-label="Close" onClick={toggleRules}>
              <img src={iconClose} alt="" />
            </button>
          </div>
          <img
            className="rules"
            src={rules}
            alt="Rock beats Scissors. Scissors beats Paper. Paper beats Rock"
          />
        </RulesImage>
      </RulesLayout>
    </LayoutWrapper>
  );
};

export default Layout;
