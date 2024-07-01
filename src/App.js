import React, { useState } from 'react';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import Rules from './Rules';
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
            <Rules />
            <div className="boomerang-image"></div>
          </div>
          <div className="right-panel">
              {isGameStarted ? (
                  <GameScreen />
              ) : (
                  <StartScreen startGame={startGame} />
              )}
          </div>
        </div>
    </div>
    );
};

export default App;
