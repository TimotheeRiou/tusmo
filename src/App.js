import React, { useState } from 'react';
import WordInput from './WordInput';
import WordDisplay from './WordDisplay';
import './App.css';

const MOT_A_DEVINER = 'REACT';  // Le mot à deviner

function App() {
  const [mot, setMot] = useState([]);
  const [motActuel, setMotActuel] = useState('');

  const handleGuess = () => {
    if (motActuel.length === MOT_A_DEVINER.length) {
      setMot([...mot, motActuel]);
      setMotActuel('');
    }
  };

  return (
    <div className="App">
      <h1>Motus</h1>
      <WordInput
        motActuel={motActuel}
        setMotActuel={setMotActuel}
        handleGuess={handleGuess}
      />
      <WordDisplay mot={mot} mot_a_deviner={MOT_A_DEVINER} />
    </div>
  );
}

export default App;
