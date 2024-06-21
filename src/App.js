import React, { useState, useEffect } from "react";
import SaisieMot from "./SaisieMot";
import AffichageMot from "./AffichageMot";
import words from "./words.json"; // Importation directe du fichier JSON
import "./App.css";

const MAX_ESSAIS = 6;

function App() {
  const [mots, setMots] = useState([]);
  const [motActuel, setMotActuel] = useState("");
  const [essaisRestants, setEssaisRestants] = useState(MAX_ESSAIS);
  const [message, setMessage] = useState("");
  const [motADeviner, setMotADeviner] = useState("");
  const [motALongueur, setMotALongueur] = useState(0); // État pour la longueur du mot

  useEffect(() => {
    const selectRandomWord = () => {
      const randomWord =
        words.words[
          Math.floor(Math.random() * words.words.length)
        ].toUpperCase();
      setMotADeviner(randomWord);
      setMotALongueur(randomWord.length); // Mise à jour de la longueur du mot
      console.log("Mot à deviner:", randomWord); // Log pour déboguer
    };

    selectRandomWord();
  }, []);

  const gererDeviner = () => {
    console.log("Mot actuel:", motActuel); // Log pour déboguer
    console.log("Mot à deviner:", motADeviner); // Log pour déboguer

    if (motActuel.length === motADeviner.length && essaisRestants > 0) {
      setMots([...mots, motActuel]);
      setMotActuel("");
      setEssaisRestants(essaisRestants - 1);

      if (motActuel === motADeviner) {
        setMessage("Félicitations ! Vous avez trouvé le mot !");
      } else if (essaisRestants - 1 === 0) {
        setMessage(
          `Dommage ! Vous avez épuisé tous vos essais. Le mot était : ${motADeviner}`
        );
      }
    } else if (motActuel.length !== motADeviner.length) {
      setMessage(`Le mot doit avoir ${motADeviner.length} lettres.`);
    }
  };

  const recommencerJeu = () => {
    const selectRandomWord = () => {
      const randomWord =
        words.words[
          Math.floor(Math.random() * words.words.length)
        ].toUpperCase();
      setMotADeviner(randomWord);
      setMotALongueur(randomWord.length); // Mise à jour de la longueur du mot
      console.log("Nouveau mot à deviner:", randomWord); // Log pour déboguer
    };

    selectRandomWord();

    setMots([]);
    setMotActuel("");
    setEssaisRestants(MAX_ESSAIS);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Motus</h1>
      <SaisieMot
        motActuel={motActuel}
        setMotActuel={setMotActuel}
        gererDeviner={gererDeviner}
        disabled={essaisRestants === 0 || message !== ""}
        motALongueur={motALongueur} // Passer la longueur du mot à deviner
      />
      <AffichageMot mots={mots} mot_a_deviner={motADeviner} />
      <div className="message">{message}</div>
      {message && <button onClick={recommencerJeu}>Recommencer</button>}
      <div className="essais-restants">Essais restants: {essaisRestants}</div>
      <div className="mot-longueur">
        Le mot à deviner contient {motALongueur} lettres.
      </div>{" "}
      {/* Affichage de la longueur du mot */}
    </div>
  );
}

export default App;