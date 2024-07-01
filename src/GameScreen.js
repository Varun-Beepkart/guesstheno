import React, { useState } from 'react';
import './GameScreen.css';
import Result from './Result';

const GameScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState('');
    const [secretNum,setSecretNum] = useState(generateRandomNumber());
    const [stepCount, setStepCount] = useState(5);
    const [gameFinished, setGameFinished] = useState(false);
    const [gameWon, setGameWon] = useState(false);

   
    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function handleChange(event) {
        setTerm(event.target.value);
    }

    function checkGuess() {
        let newResult = '';

        if (term === '') {
            newResult = 'Enter Valid Input';
        } else if (isNaN(term) || parseInt(term) < 1 || parseInt(term) > 10) {
            newResult = 'Enter a valid number between 1 and 10';
        } else {
            setStepCount(stepCount - 1);
            setResult("")

            if(stepCount > 1){
                if(parseInt(term) === secretNum){
                    setGameFinished(true)
                    setGameWon(true)
                }
            }else{
                setGameFinished(true)
                setGameWon(false)
            }
        }
        setResult(newResult);
    }

    const onRetry = () => {
        setSecretNum(generateRandomNumber())
        setGameFinished(false);
        setGameWon(false);
        setStepCount(5);
        setTerm('');
        setResult('');
    };

    return (
        <div className="game-screen">
          {gameFinished ? (
            <Result 
              result={gameWon ? "Won" : "Lost"} 
              onRetry={onRetry} 
            />
          ) : (
            <>
              <div className="result">
              <span className="step-count">{result === "" ? stepCount : result}</span>
              <span className="remaining-chances">{result === "" ? " chances left" : ""}</span>
              </div>
              <input
                className="input"
                placeholder="Please Enter your guess"
                onChange={handleChange}
                value={term}
                type="number"
              />
              <button className="button" onClick={checkGuess}>Guess</button>
            </>
          )}
        </div>
      );
};

export default GameScreen;
