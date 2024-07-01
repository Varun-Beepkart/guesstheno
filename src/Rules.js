import React from 'react';
import './Rules.css';

const Rules = () => {
    return (
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
    );
};

export default Rules;
