import React, { Component } from 'react';

import Layout from './components/Layout';
import PlayerChoose from './components/PlayerChoose';
import HouseChoose from './components/HouseChoose';
import ChoiceButton from './components/ChoiceButton';
import Winner from './components/Winner';
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
      gameState: 'new',
      playerChoice: 'rock',
      houseChoice: 'pending',
      winner: 'pending'
    };
    this.handleChoice = this.handleChoice.bind(this);
  }
  handleChoice() {
    let choice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    this.setState({ houseChoice: choice });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          {/* <PlayerChoose></PlayerChoose> */}
          <HouseChoose
            playerChoice={choice[this.state.playerChoice]}
            houseChoice={choice[this.state.houseChoice]}
            handleChoice={this.handleChoice}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
