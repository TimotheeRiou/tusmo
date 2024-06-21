import React, { useState } from 'react';
import SaisieMot from './SaisieMot';
import AffichageMot from './AffichageMot';
import './App.css';

const MOT_A_DEVINER = 'REACT';
const MAX_ESSAIS = 6;

function App() {
  const [mots, setMots] = useState([]);
  const [motActuel, setMotActuel] = useState('');
  const [essaisRestants, setEssaisRestants] = useState(MAX_ESSAIS);
  const [message, setMessage] = useState('');

  const gererDeviner = () => {
    if (motActuel.length === MOT_A_DEVINER.length && essaisRestants > 0) {
      setMots([...mots, motActuel]);
      setMotActuel('');
      setEssaisRestants(essaisRestants - 1);

      if (motActuel === MOT_A_DEVINER) {
        setMessage('Félicitations ! Vous avez trouvé le mot !');
      } else if (essaisRestants - 1 === 0) {
        setMessage('Dommage ! Vous avez épuisé tous vos essais.');
      }
    }
  };

  const recommencerJeu = () => {
    setMots([]);
    setMotActuel('');
    setEssaisRestants(MAX_ESSAIS);
    setMessage('');
  };

  return (
    <div className="App">
      <h1>Motus</h1>
      <SaisieMot
        motActuel={motActuel}
        setMotActuel={setMotActuel}
        gererDeviner={gererDeviner}
        disabled={essaisRestants === 0 || message !== ''}
      />
      <AffichageMot mots={mots} mot_a_deviner={MOT_A_DEVINER} />
      <div className="message">{message}</div>
      {message && <button onClick={recommencerJeu}>Recommencer</button>}
      <div className="essais-restants">Essais restants: {essaisRestants}</div>
    </div>
  );
}

export default App;
