import React from 'react';
import './Result.css';

const Result = ({ result, onRetry }) => {
  return (
    <div className="result-screen">
      <div className="result-emoji">
        {result === "Won" ? "🎉" : "🤕"}
      </div>
      <div className="result">
        You {result} !!
      </div>
      <button className="retry-button" onClick={onRetry}>
        {result === "Won" ? "Play Again" : "Re-try"}
      </button>
    </div>
  );
};

export default Result;
