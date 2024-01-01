import React, { useState, useEffect } from 'react';

const CapsLockWarning = () => {
    const [capsLockIsOn, setCapsLockIsOn] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const capsLockIsOn = event.getModifierState('CapsLock');
            setCapsLockIsOn(capsLockIsOn);
        };

        // Attach the event listener to the document
        document.addEventListener('keydown', handleKeyPress);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
        document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    return (
        <div className='cap absolute flex mx-atuo bg-chaosPink rounded-lg text-chaosBG'>
            <div className={`caps-lock-warning ${capsLockIsOn ? '' : 'hidden'} py-3 px-5 flex items-center gap-3`}>
                <i className='fa-solid fa-lock'></i>
                <p className=''>Caps Lock</p>
            </div>
        </div>
    );
};

export default CapsLockWarning;
