import React, { useState, useEffect } from 'react';

const TargetText = () => {
    const [typedText, setTypedText] = useState('');
    const [errorIndices, setErrorIndices] = useState([]);
    const targetText = "It's you! Despite everything, it's still you" // testing string

    const handleKeyPress = (event) => {
        const typedChar = event.key;
        const expectedChar = targetText[typedText.length];

        console.log({typedChar, expectedChar});

        if (typedChar === expectedChar) {
        setTypedText((prevTypedText) => prevTypedText + typedChar);
        } else {
        setErrorIndices((prevErrorIndices) => [...prevErrorIndices, typedText.length]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace' && event.ctrlKey) {
        // Handle Ctrl + Backspace to delete entire word
        setTypedText((prevTypedText) => prevTypedText.slice(0, typedText.lastIndexOf('')));
        }
    };

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
        document.removeEventListener('keypress', handleKeyPress);
        document.removeEventListener('keydown', handleKeyDown);
        };
    }, [typedText, targetText]);

    return (
        <div className='text-white'>
            {targetText.split('').map((char, index) => {
            let textColorClass = '';

            if (errorIndices.includes(index)) {
                textColorClass = 'text-red-500';
            } else if (typedText[index] === char) {
                textColorClass = 'text-green-500';
            }

            return (
                <span key={index} className={textColorClass}>
                {char}
                </span>
            );
            })}
        </div>
    );
};

export default TargetText;

