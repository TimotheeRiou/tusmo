import React from 'react';

function SaisieMot({ motActuel, setMotActuel, gererDeviner }) {
    return (
        <div>
            <input
                type="text"
                value={motActuel}
                onChange={(e) => setMotActuel(e.target.value.toUpperCase())}
                maxLength={5}  // Limiter l'entrée à la longueur du mot à deviner
            />
            <button onClick={gererDeviner}>OK</button>
        </div>
    );
}

export default SaisieMot;
