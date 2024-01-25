import React, { useRef, useEffect, useState } from 'react';

const InputField = () => {
    const inputRef = useRef(null);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        // Focus on the input field when the component mounts
        inputRef.current.focus();
    }, []);

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
        const isLetter = key.length >= 1 && key !== ' ';
        const isSpace = key === ' ';

        if (isLetter) {
            if (currentLetter) {
                addClass(currentLetter, key === expected ? 'text-green-500' : 'text-red-500');
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
        }
        
        if (isSpace) {
            if (expected !== ' ') {
                const letterToInvalidate = [...document.querySelectorAll('.word.active .letter:not(.text-green-500)')];
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
        if (nextLetter) {
            cursor.style.left = nextLetter.getBoundingClientRect().left + 2 + 'px';
        }
    };

    return (
        <input
        ref={inputRef}
        type="text"
        // className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none"
        className='text-black'
        onChange={handleInputChange}
        value={userInput}
        />
    );
};

export default InputField;
