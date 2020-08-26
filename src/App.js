import React, { useState, useEffect } from 'react';

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
  }
};

function App() {
  let [houseChoice, updateHouseChoice] = useState('pending');
  let [score, updateScore] = useState(0);
  let [playerChoice, updatePlayerChoice] = useState('pending');
  let [winner, updateWinner] = useState('pending'); // pending | none | house | player
  useEffect(() => {
    updateWinner(
      (houseChoice = ['rock', 'paper', 'scissors'][
        Math.floor(Math.random() * 3)
      ])
    );
  }, [playerChoice]);
  useEffect(() => {
    updateWinner(
      (winner = () => {
        switch (true) {
          case playerChoice === houseChoice:
            return 'draw';
            break;
          case playerChoice === 'rock' && houseChoice === 'scissors':
            return 'player';
            break;
          case playerChoice === 'rock' && houseChoice === 'paper':
            return 'house';
            break;
          case playerChoice === 'paper' && houseChoice === 'rock':
            return 'player';
            break;
          case playerChoice === 'paper' && houseChoice === 'scissors':
            return 'house';
            break;
          case playerChoice === 'scissors' && houseChoice === 'paper':
            return 'player';
            break;
          case playerChoice === 'scissors' && houseChoice === 'rock':
            return 'house';
            break;
          default:
            return 'error';
        }
      })
    );
  }, [houseChoice]);
  const handleSelect = (e) => updatePlayerChoice(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <p>{playerChoice}</p>

        {winner === 'pending' ? (
          <>
            <ChoiceButton choice={choice.rock} onClick={handleSelect} />
            <ChoiceButton choice={choice.paper} onClick={handleSelect} />
            <ChoiceButton choice={choice.scissors} onClick={handleSelect} />
          </>
        ) : (
          <>
            <p>
              you picked {playerChoice} the house picked {houseChoice}
            </p>
            <Winner winner={winner} />
          </>
        )}
        <button onClick={() => updatePlayerChoice((playerChoice = 'pending'))}>
          play again
        </button>
      </header>
    </div>
  );
}

export default App;
