export const checkQuoteClicked = () => {
    const words = document.getElementById('wordsButton');
    const quote = document.getElementById('quoteButton');
    const random = document.getElementById('randomButton');
    const time = document.getElementById('timeButton');
    const puncAndNum = document.getElementById('puncAndNum');
    const left = document.getElementById('leftBorder'); // left border
    const right = document.getElementById('rightBorder'); // right border

    const quoteConfig = document.getElementById('quoteLength');
    const timeConfig = document.getElementById('timeNum');
    const wordsNum = document.getElementById('wordsNum');
    const config = document.getElementById('config');

    // console.log('Click Quote');
    puncAndNum.classList.add('hidden');
    left.classList.add('hidden');
    right.classList.remove('hidden');
    quote.classList.add('text-chaosPink');

    // config
    config.classList.remove('hidden');
    quoteConfig.classList.remove('hidden');
    timeConfig.classList.add('hidden');
    wordsNum.classList.add('hidden');

    // remove class text-chaosPink
    words.classList.remove('text-chaosPink');
    random.classList.remove('text-chaosPink');
    time.classList.remove('text-chaosPink');

    const timer = document.getElementById('timer');
    timer.classList.add('hidden');

    //unhide reset button and language combobox
    const language = document.getElementById('selectLanguage');
    const resetGame1 = document.getElementById('resetGame1');

    language.classList.remove('hidden');
    resetGame1.classList.remove('hidden');

    // unhide cursor
    const cursor = document.getElementById('cursor');
    cursor.classList.remove('hidden');
}