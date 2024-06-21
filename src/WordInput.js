import React from 'react';

function WordInput({ motActuel, setMotActuel, handleGuess }) {
    return (
        <div>
            <input
                type="text"
                value={motActuel}
                onChange={(e) => setMotActuel(e.target.value.toUpperCase())}
                maxLength={5}  // Limiter l'entrée à la longueur du mot à deviner
            />
            <button onClick={handleGuess}>Guess</button>
        </div>
    );
}

export default WordInput;
