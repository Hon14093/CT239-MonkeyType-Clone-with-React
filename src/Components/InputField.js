import React, { useRef, useEffect, useState, forwardRef } from 'react';

const InputField = () => {
    const inputRef = useRef(null);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        // Focus on the input field when the component mounts
        if (document.activeElement !== inputRef.current) {
            inputRef.current.focus();
        }
    });

    function addClass(element, name) {
        element.className += ' '+name;
    }
    function removeClass(element, name) {
        element.className = element.className.replace(name, '');
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUserInput(value);

        const key = value.charAt(value.length - 1);
        const activeWord = document.querySelector('.active');
        const currentLetter = document.querySelector('.letter.current');
        const expected = currentLetter?.innerHTML || ' ';
        const isLetter = key.length >= 1 && key !== ' ' ;
        const isSpace = key === ' ';
        const isFirstLetter = currentLetter === activeWord.firstChild;
        const isBackspace = event.nativeEvent.data === null;

        if (isBackspace) {
            console.log('backspace');
            if (currentLetter && isFirstLetter) {
                console.log('running');
                // make previous word current, last letter current
                removeClass(activeWord, 'active');
                addClass(activeWord.previousSibling, 'active');
                removeClass(currentLetter, 'current');
                addClass(activeWord.previousSibling.lastChild, 'current');
                removeClass(activeWord.previousSibling.lastChild, 'text-red-500');
                removeClass(activeWord.previousSibling.lastChild, 'text-white');
            }
            if (currentLetter && !isFirstLetter) {
                console.log('running 2');
                // move back one letter, invalidate letter
                removeClass(currentLetter, 'current');
                addClass(currentLetter.previousSibling, 'current');
                removeClass(currentLetter.previousSibling, 'text-red-500');
                removeClass(currentLetter.previousSibling, 'text-white');
            }
            if (!currentLetter) {
                addClass(activeWord.lastChild, 'current');
                removeClass(activeWord.lastChild, 'text-red-500');
                removeClass(activeWord.lastChild, 'text-white');
            }

        } else if (isLetter) {
            console.log('letter');
            if (currentLetter) {
                addClass(currentLetter, key === expected ? 'text-white' : 'text-red-500');
                removeClass(currentLetter, 'current');
                if (currentLetter.nextSibling) {
                    addClass(currentLetter.nextSibling, 'current');
                }
            } else {
                const incorrectLetter = document.createElement('span');
                incorrectLetter.innerHTML = key;
                incorrectLetter.className = 'letter text-red-500 extra';
                activeWord.appendChild(incorrectLetter);
            }
        } else if (isSpace) {
            if (expected !== ' ') {
                const letterToInvalidate = [...document.querySelectorAll('.word.active .letter:not(.text-white)')];
                letterToInvalidate.forEach(letter => {
                    addClass(letter, 'text-red-500');
                })
            }
            removeClass(activeWord, 'active');
            addClass(activeWord.nextSibling, 'active');

            if (currentLetter) {
                removeClass(currentLetter, 'current');
            }
            addClass(activeWord.nextSibling.firstChild, 'current');
        }
        
        console.log({key, expected}); 
        console.log(key === expected);

        // move cursor
        const nextLetter = document.querySelector('.letter.current');
        const cursor = document.getElementById('cursor');
        const nextWord = document.querySelector('.word.active');
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] - 175 + 'px';

    };

    return (
        <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none"
        // className='text-black'
        onChange={handleInputChange}
        value={userInput}
        />
    );
};

export default InputField;
