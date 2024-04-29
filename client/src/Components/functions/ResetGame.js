export const resetGame = (mode, language, quoteLength, wordsValue, timeValue) => {

    const wordsButton = document.getElementById('wordsButton');
    const quoteButton = document.getElementById('quoteButton');
    const timeButton = document.getElementById('timeButton');
    const randomButton = document.getElementById('randomButton');
    const extraLetters = document.querySelectorAll('.extra');
    
    console.log('reloaded');
    
    if (extraLetters.length > 0) {
        // remove all extra letters
        extraLetters.forEach(extra => {
            extra.remove();
        })
    }

    switch (mode) {
        case 'words':
            const wordButtonIdString = 'button' + wordsValue;
            const wordsValueButton = document.getElementById(wordButtonIdString);

            if (wordsButton) {
                wordsButton.click();
                wordsValueButton.click();
            }
            break;

        case 'quote':
            const quoteLengthButton = document.getElementById(quoteLength);

            if (quoteButton) {
                quoteButton.click();
                quoteLengthButton.click();
            }
            break;
        
        case 'time':
            const timeButtonIdString = 'button' + timeValue;
            const timeValueButton = document.getElementById(timeButtonIdString);

            if (timeButton) {
                timeButton.click();
                timeValueButton.click();
            }
            break;

        case 'random':
            randomButton.click();
            break;
    }

    clearInterval(window.timer);
    clearInterval(window.wpmTimer);
    
    document.getElementById('timer').innerHTML = timeValue;
    document.getElementById('textBox').classList.remove('over');

    const wordsBox = document.getElementById('words');
    wordsBox.style.top = 0 + 'px';
    const cursor = document.getElementById('cursor');
    cursor.style.top = wordsBox.getBoundingClientRect().top + 'px';
    
}