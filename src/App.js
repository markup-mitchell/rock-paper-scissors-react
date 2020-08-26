import React, { useState } from 'react';

import ChoiceButton from './components/ChoiceButton';

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
  const [score, updateScore] = useState(0);
  let [playerChoice, updatePlayerChoice] = useState('pending');
  let houseChoice = ['rock', 'paper', 'scissors'][
    Math.floor(Math.random() * 3)
  ];
  const handleSelect = (e) => updatePlayerChoice(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <p>{playerChoice}</p>

        {playerChoice === 'pending' ? (
          <>
            <ChoiceButton choice={choice.rock} onClick={handleSelect} />
            <ChoiceButton choice={choice.paper} onClick={handleSelect} />
            <ChoiceButton choice={choice.scissors} onClick={handleSelect} />
          </>
        ) : (
          <>
            <p>
              you picked <ChoiceButton choice={choice[playerChoice]} /> the
              house picked <ChoiceButton choice={choice[houseChoice]} />
            </p>
            <p>OUTCOME!</p>
            <button
              onClick={() => updatePlayerChoice((playerChoice = 'pending'))}
            >
              play again
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
