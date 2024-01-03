import React, { useEffect, useRef } from 'react'

function WordsFunction() {

    // Initialize click when loading up website
    const firstButtonRef = useRef(null);
    useEffect(() => {
        if (firstButtonRef.current) {
            firstButtonRef.current.click();
        }
    }, [])

    function checkWordsClicked() {
        const words = document.getElementById('wordsButton');
        const quote = document.getElementById('quoteButton');
        const zen = document.getElementById('zenButton');
        const time = document.getElementById('timeButton');
        const puncAndNum = document.getElementById('puncAndNum');
        const left = document.getElementById('leftBorder');
        const right = document.getElementById('rightBorder');

        const quoteConfig = document.getElementById('quoteLength');
        const timeConfig = document.getElementById('timeNum');
        const wordsNum = document.getElementById('wordsNum');
        const config = document.getElementById('config');

        console.log('Click Words');
        // remove class hidden
        puncAndNum.classList.remove('hidden');
        left.classList.remove('hidden');
        right.classList.remove('hidden');
        config.classList.remove('hidden');

        quote.classList.remove('text-chaosPink');
        zen.classList.remove('text-chaosPink');
        time.classList.remove('text-chaosPink');

        words.classList.add('text-chaosPink');

        // config
        wordsNum.classList.remove('hidden');
        quoteConfig.classList.add('hidden');
        timeConfig.classList.add('hidden');
        
    }

    return (
        <button onClick={ checkWordsClicked } ref={ firstButtonRef }>
            <div className='Ani duration-400' id='wordsButton'>
                <i className='fa-solid fa-a mr-2'></i>
                words
            </div>
        </button>
    )
}

export default WordsFunction
