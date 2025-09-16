import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomNumber = () => {
    setIsGenerating(true);
    // Add a small delay for better UX
    setTimeout(() => {
      const newNumber = Math.floor(Math.random() * 37); // 0-36 inclusive
      setRandomNumber(newNumber);
      setIsGenerating(false);
    }, 500);
  };

  // Determine the color based on the number
  const getNumberColor = (num) => {
    if (num === 0) return 'green';
    return num % 2 === 0 ? 'red' : 'black';
  };

  return (
    <div className="app">
      <h1>Random Number Generator</h1>
      <div className="number-display" style={{ color: getNumberColor(randomNumber) }}>
        {randomNumber !== null ? randomNumber : '?'}
      </div>
      <button 
        className={`generate-btn ${isGenerating ? 'generating' : ''}`}
        onClick={generateRandomNumber}
        disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Generate Number (0-36)'}
      </button>
      <div className="legend">
        <p>0: <span className="green-text">Green</span></p>
        <p>Even: <span className="red-text">Red</span></p>
        <p>Odd: <span className="black-text">Black</span></p>
      </div>
    </div>
  );
}

export default App;
