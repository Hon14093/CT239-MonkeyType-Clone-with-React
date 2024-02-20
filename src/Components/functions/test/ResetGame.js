export const resetGame = (mode, language, quoteLength, wordsValue, timeValue) => {

    const wordsButton = document.getElementById('wordsButton');
    const quoteButton = document.getElementById('quoteButton');
    const timeButton = document.getElementById('timeButton');
    const extraLetters = document.querySelectorAll('.extra');
    
    console.log('reloaded');
    
    if (extraLetters.length > 0) {
        // remove all extra letters
        extraLetters.forEach(extra => {
            extra.remove();
        })
    }
    
    if (mode === 'words') {
        const wordButtonIdString = 'button' + wordsValue;
        const wordsValueButton = document.getElementById(wordButtonIdString);

        if (wordsButton) {
            wordsButton.click();
            wordsValueButton.click();
        }
    } 
    else if (mode === 'quote') {
        const quoteLengthButton = document.getElementById(quoteLength);

        if (quoteButton) {
            quoteButton.click();
            quoteLengthButton.click();
        }
    }
    else if (mode === 'time') {
        const timeButtonIdString = 'button' + timeValue;
        const timeValueButton = document.getElementById(timeButtonIdString);

        if (timeButton) {
            timeButton.click();
            timeValueButton.click();
        }
    }

    clearInterval(window.timer)
    document.getElementById('timer').innerHTML = timeValue;
    document.getElementById('textBox').classList.remove('over');

    const wordsBox = document.getElementById('words');
    wordsBox.style.top = 0 + 'px';
    const cursor = document.getElementById('cursor');
    cursor.style.top = wordsBox.getBoundingClientRect().top + 'px';
    
}