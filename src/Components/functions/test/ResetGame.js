export const resetGame = (mode, language, quoteLength, wordsValue) => {
    const wordsButton = document.getElementById('wordsButton');
    const quoteButton = document.getElementById('quoteButton');
    const extraLetters = document.querySelectorAll('.extra');

    const buttonIdString = 'button' + wordsValue;
    const wordsValueButton = document.getElementById(buttonIdString);
    const quoteLengthButton = document.getElementById(quoteLength);

    if (extraLetters.length > 0) {
        // remove all extra letters
        extraLetters.forEach(extra => {
            extra.remove();
        })
    }
    
    if (mode === 'words') {
        if (wordsButton) {
            wordsButton.click();
            wordsValueButton.click();
        }
    } 
    else if (mode === 'quote') {
        if (quoteButton) {
            quoteButton.click();
            quoteLengthButton.click();
        }
    }

    const wordsBox = document.getElementById('words');
    wordsBox.style.top = 0 + 'px';
    const cursor = document.getElementById('cursor');
    cursor.style.top = wordsBox.getBoundingClientRect().top + 'px';

}