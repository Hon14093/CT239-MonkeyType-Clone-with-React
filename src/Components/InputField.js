import React, { useRef, useEffect} from 'react';

const InputField = ({mode, seconds}) => {
    const inputRef = useRef(null);
    let gameTime = (seconds - 1) * 1000;
    let startTime = null;
    let endTime = null;
    let elapsedTime = 0;
    let totalTyped = 0; // total numbers of key strokes
    
    let currentIndex = 0;
    let typedString = '';
    
    // global variables for time mode
    window.timer = null;
    window.gameStart = null;
    window.pauseTime = null;
    
    // testing idea
    window.timeArray = [];
    window.wpmArray = [];
    window.errorArray = [];
    window.timeTaken = null;

    window.correctChars = 0;

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
        cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 'px';
        cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] - 2 + 'px';
    }

    function moveLine(activeWord) {
        const selectLanguage = document.getElementById('selectLanguage');
        console.log(Math.floor(selectLanguage.getBoundingClientRect().top));
        if (activeWord.getBoundingClientRect().top > selectLanguage.getBoundingClientRect().top + 100) {
            const words = document.getElementById('words');
            const margin = parseInt(words.style.top || '0px');

            const render = document.getElementById('renderLanguage')
            const tempMargin = parseInt(render.style.top || '0px');
            words.style.top = (tempMargin - 35.5) + 'px';
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

    function testIdea(event) {
        const key = event.key
        const specialKey = event.key.length > 1 && !event.key.startsWith('Arrow') && event.key === 'Backspace';

        if (!specialKey) {
            typedString += key;

        }
        console.log(typedString);

    }
    setInterval(() => {
        typedString = '';
    }, 2000)
    
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

        if (document.getElementById('update')) {
            document.getElementById('update').click();
        }

        setTimeout(accCalulator(), 100);
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

    function wpmeEachSecond() {
        // will store calculated wpm for each second in an array
        
    }

    // startTimer() and stopTimer() are there to provide data for line chart
    function startTimer(event) {
        const specialKey = event.key.length > 1 && !event.key.startsWith('Arrow') && event.key !== 'Backspace';
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
            console.log('Elasped time: ' + elapsedTime);
            startTime = null;
        } else console.log('Timer has not started');

        document.getElementById('timeTaken').innerHTML = elapsedTime + 's';

        for (let i=1; i<=elapsedTime; i++) {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            window.timeArray.push(i);
            window.wpmArray.push(randomNumber);

            let randomErrorNum = Math.floor(Math.random() * 8) + 1;
            window.errorArray.push(randomErrorNum)
        }
        console.log(window.timeArray);
        console.log(window.wpmArray);
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

        const isBackspace = key === 'Backspace' && !event.ctrlKey;
        const controlBackspace = key === 'Backspace' && event.ctrlKey;
        const specialKey = event.key.length > 1 && !event.key.startsWith('Arrow') && event.key !== 'Backspace';

        startTimer(event);

        console.log(window.content);

        if (document.querySelector('#textBox.over')) {
            return;
        }

        if (specialKey) {
            return;
        }

        if (controlBackspace) {
            handleControlBackspace(controlBackspace, activeWord);
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
            window.correctChars += 1;
            document.getElementById('charactersCount').innerHTML = window.correctChars; 
        }
        
        console.log({key, expected}); 
        console.log(key === expected);

        // move lines
        moveLine(activeWord);

        // move cursor
        moveCursor();

        totalTyped++;
    };

    const accCalulator = () => {
        // window.content is in English.js
        let acc = Math.floor((window.correctChars / totalTyped) * 100);
        document.getElementById('accuracy').innerHTML = acc + '%';
        console.log('Acc: ' + acc + '%');
        
    }

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
                testIdea(event);
            }}
            />
        );
    }

};

export default InputField;
    