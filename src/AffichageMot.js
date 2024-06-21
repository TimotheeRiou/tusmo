import React from 'react';

function AffichageMot({ mots, mot_a_deviner }) {
    const afficherMot = (mot) => {
        return mot.split('').map((lettre, index) => {
            let className = '';
            if (mot_a_deviner[index] === lettre) {
                className = 'correct';
            } else if (mot_a_deviner.includes(lettre)) {
                className = 'present';
            } else {
                className = 'absent';
            }
            return <span key={index} className={className}>{lettre}</span>;
        });
    };

    return (
        <div>
            {mots.map((mot, index) => (
                <div key={index} className="mot">
                    {afficherMot(mot)}
                </div>
            ))}
        </div>
    );
}

export default AffichageMot;
