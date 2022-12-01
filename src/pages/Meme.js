import React, { useState } from 'react';
import './Meme.css';
import Clock from '../components/iniJam';

function Dice() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`../assets/${firstDieResult}.png`);
  const secondDieImage = require(`../assets/${secondDieResult}.png`);

  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <h1>Random Dice Roll</h1>
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span className='dice-result'>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default Dice;