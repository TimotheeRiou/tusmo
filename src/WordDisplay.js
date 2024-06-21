import React from 'react';

function WordDisplay({ mot, mot_a_deviner }) {
    const renderGuess = (guess) => {
        return guess.split('').map((letter, index) => {
            let className = '';
            if (mot_a_deviner[index] === letter) {
                className = 'correct';
            } else if (mot_a_deviner.includes(letter)) {
                className = 'present';
            } else {
                className = 'absent';
            }
            return <span key={index} className={className}>{letter}</span>;
        });
    };

    return (
        <div>
            {mot.map((guess, index) => (
                <div key={index} className="guess">
                    {renderGuess(guess)}
                </div>
            ))}
        </div>
    );
}

export default WordDisplay;