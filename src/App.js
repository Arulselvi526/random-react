import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 50) + 1);
  };

  const reset = () => {
    setNumber(null);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎲</h1> 
            <h3>Random Number Generator</h3>
        

        {number === null ? (
          <p>Click the button to generate a random number!</p>
        ) : (
          <>
            <h2>{number}</h2>
            <h3>{number % 7 === 0 ? "🎉 Lucky Number!" : "😄 Try Again"}</h3>
          </>
        )}

        <button onClick={generateNumber}>Generate</button>
        <button onClick={reset}>Reset</button>
        <p>ⓘ Generates a random number between 1 to 100</p>
      </div>
    </div>
  );
}

export default App;