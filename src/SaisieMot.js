import React from 'react';

function SaisieMot({ motActuel, setMotActuel, gererDeviner, disabled }) {
    return (
        <div>
            <input
                type="text"
                value={motActuel}
                onChange={(e) => setMotActuel(e.target.value.toUpperCase())}
                maxLength={5}
                disabled={disabled}
            />
            <button onClick={gererDeviner} disabled={disabled}>OK</button>
        </div>
    );
}

export default SaisieMot;
