import React, { useState } from 'react';

const KeyUpListener = () => {
    const [keyPressed, setKeyPressed] = useState('');

    const handleKeyUp = (event) => {
        setKeyPressed(event.key);
    };

    return (
        <div>
        <p>Press a key:</p>
        <input type="text" onKeyUp={handleKeyUp} />
        <p>Last pressed key: {keyPressed}</p>
        </div>
    );
};

export default KeyUpListener;
