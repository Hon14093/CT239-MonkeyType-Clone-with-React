import React, { useRef, useEffect} from 'react';

const InputField = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (document.activeElement !== inputRef.current && !event.target.closest('select')) {
                inputRef.current.focus();
            }
        }
        
        inputRef.current.focus();
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    function addClass(element, name) {
        element.className += ' '+name;
    }
    
    function removeClass(element, name) {
        element.className = element.className.replace(name, '');
    }

    function moveCursor() {
        const nextLetter = document.querySelector('.letter.current');
        const cursor = document.getElementById('cursor');
        const nextWord = document.querySelector('.word.active');
        cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 'px';
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] - 2 + 'px';
    }

    function moveLine(activeWord) {
        if (activeWord.getBoundingClientRect().top > 320) {
            const words = document.getElementById('words');
            const margin = parseInt(words.style.top || '0px');
            words.style.top = (margin - 35) + 'px';
        }
    }

    const handleInputChange = (event) => {
        const key = event.key;
        const activeWord = document.querySelector('.active');
        const currentLetter = document.querySelector('.letter.current');
        const expected = currentLetter?.innerHTML || ' ';
        const isLetter = key.length >= 1 && key !== ' ' && !event.ctrlKey;
        const isSpace = key === ' ';
        const isFirstLetter = currentLetter === activeWord.firstChild;
        const isBackspace = key === 'Backspace' && !event.ctrlKey;
        const controlBackspace = key === 'Backspace' && event.ctrlKey;
        const specialKey = event.key.length > 1 && !event.key.startsWith('Arrow') && event.key !== 'Backspace';

        if (specialKey) {
            return;
        }

        if (controlBackspace) {
            console.log('Backspace and control are pressed');

            const letters = activeWord.querySelectorAll('span.letter');
            letters.forEach(letter => {
                letter.classList.remove('text-white', 'text-red-500', 'current');
            })
            
            activeWord.firstChild.classList.add('current');
        }

        if (isBackspace) {
            console.log('Backspace is pressed');
            const extraLetter = activeWord.querySelector('.extra:last-child');
            if (extraLetter) {
                extraLetter.remove();
            } else {
                if (currentLetter && isFirstLetter) {
                    console.log('Current letter is first letter');
                    // make previous word current, last letter current
                    removeClass(activeWord, 'active');
                    addClass(activeWord.previousSibling, 'active');
                    removeClass(currentLetter, 'current');
                    addClass(activeWord.previousSibling.lastChild, 'current');
                    removeClass(activeWord.previousSibling.lastChild, 'text-red-500');
                    removeClass(activeWord.previousSibling.lastChild, 'text-white');
                }

                if (currentLetter && !isFirstLetter) {
                    console.log('Current letter is not first letter');
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

        // move lines
        moveLine(activeWord);

        // move cursor
        moveCursor();
    };

    return (
        <input
        ref={inputRef}
        id='inputField'
        type="text"
        className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none"
        // onChange={handleInputChange}
        onKeyDown={handleInputChange}
        />
    );
};

export default InputField;
