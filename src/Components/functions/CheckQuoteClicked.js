export const checkQuoteClicked = () => {
    const words = document.getElementById('wordsButton');
    const quote = document.getElementById('quoteButton');
    const zen = document.getElementById('zenButton');
    const time = document.getElementById('timeButton');
    const puncAndNum = document.getElementById('puncAndNum');
    const left = document.getElementById('leftBorder'); // left border
    const right = document.getElementById('rightBorder'); // right border

    const quoteConfig = document.getElementById('quoteLength');
    const timeConfig = document.getElementById('timeNum');
    const wordsNum = document.getElementById('wordsNum');
    const config = document.getElementById('config');

    console.log('Click Quote');
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
    zen.classList.remove('text-chaosPink');
    time.classList.remove('text-chaosPink');

    // const renderLanguage= document.getElementById('renderLanguage');
    // renderLanguage.classList.add('hidden');
    // const quoteBox = document.getElementById('quote');
    // quoteBox.classList.remove('hidden');
}