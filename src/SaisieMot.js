import React from "react";

function SaisieMot({
    motActuel,
    setMotActuel,
    gererDeviner,
    disabled,
    motALongueur,
}) {
    const handleChange = (e) => {
        if (e.target.value.length <= motALongueur) {
            setMotActuel(e.target.value.toUpperCase());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !disabled && motActuel.length === motALongueur) {
            gererDeviner();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={motActuel}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                disabled={disabled}
                maxLength={motALongueur} // Definir la limite de longueur dynamique
            />
            <button
                onClick={gererDeviner}
                disabled={disabled || motActuel.length !== motALongueur}
            >
                OK
            </button>
        </div>
    );
}

export default SaisieMot;