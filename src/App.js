// src/App.js
import React, { useState } from 'react';
import SaisieMot from './SaisieMot';
import AffichageMot from './AffichageMot';
import './App.css';

const MOT_A_DEVINER = 'REACT';

function App() {
  const [mots, setMots] = useState([]);
  const [motActuel, setMotActuel] = useState('');

  const gererDeviner = () => {
    if (motActuel.length === MOT_A_DEVINER.length) {
      setMots([...mots, motActuel]);
      setMotActuel('');
    }
  };

  return (
    <div className="App">
      <h1>Motus</h1>
      <SaisieMot
        motActuel={motActuel}
        setMotActuel={setMotActuel}
        gererDeviner={gererDeviner}
      />
      <AffichageMot mots={mots} mot_a_deviner={MOT_A_DEVINER} />
    </div>
  );
}

export default App;
