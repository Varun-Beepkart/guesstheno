import React from 'react';
import './StartScreen.css';

const StartScreen = ({ startGame }) => {
    return (
        <div className="start-screen">
            <h2>Guess a number between 1-10</h2>
            <button onClick={startGame}>Start the Game</button>
        </div>
    );
};

export default StartScreen;
