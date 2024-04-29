export const checkRandomClicked = () => {
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

    console.log('Click Random');
    puncAndNum.classList.add('hidden');
    left.classList.add('hidden');
    right.classList.add('hidden');
    random.classList.add('text-chaosPink');

    // config
    config.classList.add('hidden');
    quoteConfig.classList.add('hidden');
    timeConfig.classList.add('hidden');
    wordsNum.classList.add('hidden');

    // remove class text-chaosPink
    words.classList.remove('text-chaosPink');
    quote.classList.remove('text-chaosPink');
    time.classList.remove('text-chaosPink');

    const timer = document.getElementById('timer');
    timer.classList.add('hidden');
}