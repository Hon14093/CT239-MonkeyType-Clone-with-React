import React from 'react'

function ZenFunction() {
    function checkZenClicked() {
        const words = document.getElementById('wordsButton');
        const quote = document.getElementById('quoteButton');
        const zen = document.getElementById('zenButton');
        const time = document.getElementById('timeButton');
        const puncAndNum = document.getElementById('puncAndNum');
        const left = document.getElementById('leftBorder'); // left border
        const right = document.getElementById('rightBorder'); // right border
        const config = document.getElementById('config');

        console.log('Click Zen');

        puncAndNum.classList.add('hidden');
        left.classList.add('hidden');
        right.classList.add('hidden');
        config.classList.add('hidden');
        zen.classList.add('text-chaosPink');

        // remove class text-chaosPink
        words.classList.remove('text-chaosPink');
        quote.classList.remove('text-chaosPink');
        time.classList.remove('text-chaosPink');
    }

    return (
        <button onClick={ checkZenClicked }>
            <div className='Ani duration-400' id='zenButton'>
                <i className='fas fa-fw fa-mountain mr-2'></i>
                zen
            </div>
        </button>
    )
}

export default ZenFunction
