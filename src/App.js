import React, { useState } from 'react';
import GameScreen from './GameScreen';
import './App.css';
import "@fontsource/space-mono";

const App = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);

    const startGame = () => {
        setIsGameStarted(true);
    };

    return (
      <div className="app">
        <div className="parent-container">
          <div className="left-panel">
            <div className="heading-container">
              <h1 className="heading"> Guess the Number</h1>
            </div>
            <div className="rules">
              <h2>Rules</h2>
              <ol>
                  <li>Start the game</li>
                  <li>Guess the number between 1-10</li>
                  <li>You would get 5 chances to guess it right.</li>
                  <li>Lost? Replay</li>
                  <li>Won? Congrats 🎉!!</li>
              </ol>
            </div>
            <div className="boomerang-image"></div>
          </div>
          <div className="right-panel">
              {isGameStarted ? (
                  <GameScreen />
              ) : (
                <div className="start-screen">
                  <h2>Guess a number between 1-10</h2>
                  <button onClick={startGame}>Start the Game</button>
                </div>
              )}
          </div>
        </div>
    </div>
    );
};

export default App;
