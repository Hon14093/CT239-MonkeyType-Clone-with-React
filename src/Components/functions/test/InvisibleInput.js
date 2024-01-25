import React, { useEffect, useRef } from 'react';

const InvisibleInput = ({ onKeyPress }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus on the input when the component mounts
        inputRef.current.focus();
    }, []);

    return (
        <input
        ref={inputRef}
        type="text"
        style={{ opacity: 0, position: 'absolute', top: -100 }}
        onKeyPress={onKeyPress}
        />
    );
};

export default InvisibleInput;
