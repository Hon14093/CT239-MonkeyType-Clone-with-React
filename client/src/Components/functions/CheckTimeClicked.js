export const checkTimeClicked = () => {
    const words = document.getElementById('wordsButton');
    const quote = document.getElementById('quoteButton');
    const random = document.getElementById('randomButton');
    const time = document.getElementById('timeButton');
    const puncAndNum = document.getElementById('puncAndNum');
    const left = document.getElementById('leftBorder');
    const right = document.getElementById('rightBorder');

    const quoteConfig = document.getElementById('quoteLength');
    const timeConfig = document.getElementById('timeNum');
    const wordsNum = document.getElementById('wordsNum');
    const config = document.getElementById('config');

    console.log('Click Time');
    // remove class hidden
    puncAndNum.classList.remove('hidden');
    left.classList.remove('hidden');
    right.classList.remove('hidden');
    config.classList.remove('hidden');

    quote.classList.remove('text-chaosPink');
    random.classList.remove('text-chaosPink');
    words.classList.remove('text-chaosPink');
    time.classList.add('text-chaosPink');

    // config
    wordsNum.classList.add('hidden');
    quoteConfig.classList.add('hidden');
    timeConfig.classList.remove('hidden');

    const timer = document.getElementById('timer');
    timer.classList.remove('hidden');

    //unhide reset button and language combobox
    const language = document.getElementById('selectLanguage');
    const resetGame1 = document.getElementById('resetGame1');

    language.classList.remove('hidden');
    resetGame1.classList.remove('hidden');

    // unhide cursor
    const cursor = document.getElementById('cursor');
    cursor.classList.remove('hidden');
}