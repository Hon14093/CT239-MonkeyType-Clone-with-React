import React, { useRef, useEffect} from 'react';
import averageCharsPerWord from './functions/AverageCharacters';
import { WPM } from './functions/WPMcalculation';

const InputField = ({mode, seconds}) => {
    const inputRef = useRef(null);
    let gameTime = (seconds - 1) * 1000;
    let startTime = null;
    let endTime = null;
    let elapsedTime = 0;
    let totalTyped = 0; // total numbers of key strokes
    let backspaceTyped = 0;
    
    let currentIndex = -1;
    let typedString = '';
    let wholeTypedString = '';
    let averageChars = averageCharsPerWord(window.content);
    
    // global variables for time mode
    window.timer = null;
    window.gameStart = null;
    window.pauseTime = null;
    
    window.timeArray = [];
    window.wpmArray = [];
    window.errorArray = [];
    window.timeTaken = null;
    let inputPerSecond = [];
    let indexPerSecond = [];

    // wpm timer
    window.wpmTimer = null;
    window.wpmGameStart = null;

    //test
    let correctChars = 0;
    let acc = 0;

    useEffect(() => {
        const handleClick = (event) => {
            if (document.activeElement !== inputRef.current && !event.target.closest('select') && inputRef.current) {
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
        element.classList.add(name);
    }

    function removeClass(element, name) {
        element.classList.remove(name);
    }

    function moveCursor() {
        const nextLetter = document.querySelector('.letter.current');
        const cursor = document.getElementById('cursor');
        const nextWord = document.querySelector('.word.active');
        cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 'px' ;
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] - 2 + 'px';
    }

    function moveLine(activeWord) {
        const selectLanguage = document.getElementById('selectLanguage');
        if (activeWord.getBoundingClientRect().top > selectLanguage.getBoundingClientRect().top + 100) {
            const words = document.getElementById('words');
            const margin = parseInt(words.style.top || '0px');
            console.log('parse Int: ' + words.style.top);
            console.log('margin: '+margin);
            words.style.top = (margin - 35.5) + 'px';
        }
    }

    function handleControlBackspace(controlBackspace, activeWord) {
        // remove all extra letters
        const extraLetters = activeWord.querySelectorAll('.extra');
        if (extraLetters.length > 0) {
            extraLetters.forEach(extra => {
                extra.remove();
            })
        }

        if (controlBackspace) {
            console.log('Backspace and control are pressed');

            const letters = activeWord.querySelectorAll('span.letter');
            letters.forEach(letter => {
                letter.classList.remove('text-white', 'text-red-500', 'current');
            })
            
            activeWord.firstChild.classList.add('current'); 
        }
    }

    const mergeShortString = (arr) => {
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i].length < 3) {
                arr[i + 1] = arr[i] + arr[i + 1];
                arr.splice(i, 1); // Remove the merged element
                i--; // Adjust the index after splicing
            }
        }
        return arr;
    }

    function testIdea(key, expected, isLetter, isBackspace) {
        if (isBackspace && currentIndex !== -1) {
            typedString = typedString.slice(0, -1);
            wholeTypedString = wholeTypedString.slice(0, -1);
            currentIndex--;
        }
        else if (!isBackspace) {
            typedString += key;
            wholeTypedString += key;
            currentIndex++;
        }

        if (!window.wpmTimer && isLetter) {
            window.wpmTimer = setInterval(() => {
                if (!window.wpmGameStart) {
                    window.wpmGameStart = (new Date()).getTime();
                }
                const currentTime = (new Date()).getTime();
                const msPassed = currentTime - window.wpmGameStart;
                const sPassed = Math.round(msPassed / 1000);
                const sLeft = (gameTime / 1000) - sPassed;

                inputPerSecond.push(typedString);
                indexPerSecond.push(currentIndex);
                
                if (sLeft <= -1) {
                    clearInterval(window.wpmTimer);
                    // wpmEachSecond();
                    return;
                }
                
            }, 1000)
        }
        
        console.log('Typed Characters: ' + typedString);
    
    }

    function wpmEachSecond() {
        // will store calculated wpm for each second in an array
        let typedCharacters = inputPerSecond.map((el) => el.length);

        for (let x=0; x<elapsedTime; x++) {
            const wpm = (typedCharacters[x] / averageChars) * (60 / (x+1));
            window.wpmArray.push(wpm);
        }

        // for (let x = 0; x < elapsedTime; x++) {
        //   // Handle division by zero and potential missing values
        //     const wpm = (x === 0)
        //         ? 0 // Set wpm to 0 for the first second (avoid division by zero)
        //         : (typedCharacters.length > 0 && averageChars > 0)
        //         ? (typedCharacters.reduce((sum, length) => sum + length, 0) / averageChars) * (60 / (x + 1))
        //         : NaN; // Set wpm to NaN if typedCharacters or averageChars is invalid
        
        //     window.wpmArray.push(wpm);
        // }
        
        console.log(window.wpmArray);
    }

    function calculateNetWPM() {

    }
    
    function gameOver() {
        console.log('Game Over');
        stopTimer();
        clearInterval(window.timer);
        addClass(document.getElementById('textBox'), 'over');

        removeClass(document.getElementById('lineChart'), 'hidden');
        addClass(document.getElementById('textBox'), 'hidden');
        addClass(document.getElementById('selectLanguage'), 'opacity-0');
        addClass(document.getElementById('resetGame1'), 'hidden');
        addClass(document.getElementById('top'), 'opacity-0');

        
        inputPerSecond = inputPerSecond.filter((item) => {
            return item !== '' && item !== null && item !== undefined;
        })
        
        inputPerSecond = mergeShortString(inputPerSecond);
        setTimeout(() => {
            accCalulator();
            wpmEachSecond();
            WPM(typedString, window.content, averageChars, correctChars, elapsedTime, acc, backspaceTyped);
            
            if (document.getElementById('update')) {
                document.getElementById('update').click();
            }

            // console.log(inputPerSecond);
            // console.log(indexPerSecond);
            // console.log(window.content);
            // console.log(wholeTypedString);
            typedString = ''; // reset String when game is over
        }, 100);
        
    }

    function timerCountdown(event) {
        const key = event.key;
        const isLetter = key.length >= 1 && key !== ' ' && !event.ctrlKey && key !== 'Backspace';

        if (!window.timer && isLetter) {
            window.timer = setInterval(() => {
                if (!window.gameStart) {
                    window.gameStart = (new Date()).getTime();
                }
                const currentTime = (new Date()).getTime();
                const msPassed = currentTime - window.gameStart;
                const sPassed = Math.round(msPassed / 1000);
                const sLeft = (gameTime / 1000) - sPassed;
                if (sLeft <= -1) {
                    gameOver();
                    return;
                }
                document.getElementById('timer').innerHTML = sLeft + '';
            }, 1000)
        }
    }

    // startTimer() and stopTimer() are there to provide data for line chart
    // not for time mode
    function startTimer(event) {
        const specialKey = (event.key.length > 1 && event.key !== 'Backspace') || event.key.startsWith('Arrow');
        endTime = null;
        if (!startTime && !specialKey) {
            startTime = Date.now();
            console.log('Start time: ' + startTime);
            
        } else console.log('Not started');
    }

    function stopTimer() {
        if (startTime) {
            endTime = Date.now();
            elapsedTime = Math.floor((endTime - startTime) / 1000);
            window.timeTaken = elapsedTime;
            console.log('Elapsed time: ' + elapsedTime);
            startTime = null;
        } else console.log('Timer has not started');

        document.getElementById('timeTaken').innerHTML = elapsedTime + 's';

        for (let i=1; i<=elapsedTime; i++) {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            window.timeArray.push(i);
            // window.wpmArray.push(randomNumber);

            let randomErrorNum = Math.floor(Math.random() * 8) + 1;
            window.errorArray.push(randomErrorNum)
        }
        console.log('Time Array: ' + window.timeArray);
        
    }

    function accCalulator() {
        // window.content variable is in English.js
        acc = Math.floor((correctChars / totalTyped) * 100);
        document.getElementById('accuracy').innerHTML = acc + '%';
        // console.log('Acc: ' + acc + '%');
    }

    const handleInputChange = (event) => {
        const key = event.key;
        const activeWord = document.querySelector('.active');
        const currentLetter = document.querySelector('.letter.current');
        const expected = currentLetter?.innerHTML || ' ';
        const isLetter = key.length >= 1 && key !== ' ' && !event.ctrlKey && key !== 'Backspace';
        const isSpace = key === ' ';
        const isFirstLetter = !!currentLetter && !!activeWord.firstChild &&
        (currentLetter === activeWord.firstChild);
        const FirstWord = document.querySelector('.first_word');
        const isFirstCharacter = activeWord === FirstWord && isFirstLetter;

        const isBackspace = key === 'Backspace' && !event.ctrlKey;
        const controlBackspace = key === 'Backspace' && event.ctrlKey;
        const specialKey = (event.key.length > 1 && event.key !== 'Backspace') || event.key.startsWith('Arrow');
        
        startTimer(event);

        //console.log(window.content);

        if (document.querySelector('#textBox.over')) {
            return;
        }

        if (specialKey) {
            return;
        }

        if (controlBackspace) {
            handleControlBackspace(controlBackspace, activeWord);
        }

        if (isBackspace && !isFirstCharacter) {
            console.log('Backspace is pressed');
            backspaceTyped++;
            correctChars--;
            const extraLetter = activeWord.querySelector('.extra:last-child');
            if (extraLetter) {
                extraLetter.remove();
            } else {
                console.log('klsjdfkljslkdjflksjdfjksldfklsjdf');
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

        } 

        if (isLetter) {
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
        } 
        
        if (isSpace && !document.querySelector('#textBox.over')) {
            console.log('space')
            if (expected !== ' ') {
                const letterToInvalidate = [...document.querySelectorAll('.word.active .letter:not(.text-white)')];
                letterToInvalidate.forEach(letter => {
                    addClass(letter, 'text-red-500');
                })
            }
            if (activeWord) {
                removeClass(activeWord, 'active');
            }

            if (activeWord.nextSibling) {
                addClass(activeWord.nextSibling, 'active');
            } 
            else {
                gameOver();
                return;
            }

            if (currentLetter) {
                removeClass(currentLetter, 'current');
            }

            if (activeWord.nextSibling.firstChild) {
                addClass(activeWord.nextSibling.firstChild, 'current');
            } else {
                return;
            }
        }

        if (key === expected) {
            correctChars++;
            document.getElementById('charactersCount').innerHTML = correctChars; 
        }
        
        console.log({key, expected}); 

        // move lines and cursor
        moveLine(activeWord);
        moveCursor();

        testIdea(key, expected, isLetter, isBackspace);
        totalTyped++;
    };

    

    if (mode === 'time') {
        return (
            <input
            ref={inputRef}
            id='inputField'
            type="text"
            className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none time"
            onKeyDown={(event) => {
                handleInputChange(event);
                timerCountdown(event);
            }}
            />
        );
    } else {
        return (
            <input
            ref={inputRef}
            id='inputField'
            type="text"
            className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none"
            onKeyDown={(event) => {
                handleInputChange(event);
                // testIdea(event);
            }}
            />
        );
    }

};

export default InputField;
    