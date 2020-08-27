import React, { Component } from 'react';

import ContentWrapper from './components/ContentWrapper';
import Layout from './components/Layout';
import PlayerChoose from './components/PlayerChoose';
import HouseChoose from './components/HouseChoose';
import Outcome from './components/Outcome';
import icon_rock from './images/icon-rock.svg';
import icon_paper from './images/icon-paper.svg';
import icon_scissors from './images/icon-scissors.svg';

import './App.css';

const choice = {
  rock: {
    name: 'rock',
    icon: icon_rock
  },
  paper: {
    name: 'paper',
    icon: icon_paper
  },
  scissors: {
    name: 'scissors',
    icon: icon_scissors
  },
  pending: {
    name: 'pending',
    icon: null
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      gameState: 'new',
      playerChoice: 'pending',
      houseChoice: 'pending',
      winner: 'pending'
    };
  }
  handleHouseChoice = () => {
    let choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    this.setState({ houseChoice: choice });
  };
  handlePlayerChoice = (e) => {
    this.setState({ playerChoice: e.target.value });
  };
  startNewRound = () => {
    this.setState({
      playerChoice: 'pending',
      houseChoice: 'pending'
    });
  };
  incrementScore = () => {
    let newScore = this.state.score + 1;
    this.setState({ score: newScore });
  };

  render() {
    return (
      <div className="App">
        <ContentWrapper>
          <Layout score={this.state.score}>
            {this.state.playerChoice === 'pending' ? (
              <PlayerChoose
                choice={choice}
                handlePlayerChoice={this.handlePlayerChoice}
              />
            ) : (
              <HouseChoose
                playerChoice={choice[this.state.playerChoice]}
                houseChoice={choice[this.state.houseChoice]}
                handleHouseChoice={this.handleHouseChoice}
              />
            )}
            {this.state.playerChoice === 'pending' ||
            this.state.houseChoice === 'pending' ? null : (
              <Outcome
                playerChoice={this.state.playerChoice}
                houseChoice={this.state.houseChoice}
                playAgain={this.startNewRound}
                incrementScore={this.incrementScore}
              />
            )}
          </Layout>
        </ContentWrapper>
      </div>
    );
  }
}

export default App;
