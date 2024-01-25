import React, { useRef, useEffect } from 'react';

const InputComponent = ({ onKeyPress }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
      // Pass the pressed key to the parent component
            onKeyPress(event.key);
        };

    // Add an event listener to capture keypress events
        document.addEventListener('keypress', handleKeyPress);

    // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [onKeyPress]);

    return (
        <input
        ref={inputRef}
        type="text"
        style={{ opacity: 0, position: 'absolute', top: -100 }}
        />
    );
};

export default InputComponent;
