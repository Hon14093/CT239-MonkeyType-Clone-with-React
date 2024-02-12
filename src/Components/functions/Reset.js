export const reset = () => {
    const wordsBox = document.getElementById('words');
    const activeWord = wordsBox.querySelector('div.word.active');
    const firstLetter = activeWord.querySelector('span.letter:first-child');
    const cursor = document.getElementById('cursor');
    console.log('reset');

    document.getElementById('textBox').classList.remove('over');

    wordsBox.querySelectorAll('span.letter').forEach(letter => {
        letter.classList.remove('text-white', 'text-red-500', 'current');
    });

    wordsBox.querySelectorAll('.active').forEach(activeWord => {
        activeWord.classList.remove('active');
    });
    
    wordsBox.firstChild.classList.add('active');
    firstLetter.classList.add('current');

    const extraLetters = document.querySelectorAll('.extra');
    if (extraLetters.length > 0) {
        // remove all extra letters
        extraLetters.forEach(extra => {
            extra.remove();
        })
    }

    // reset cursor to the first letter
    cursor.style.left = wordsBox.getBoundingClientRect().left - 2 + 'px';
}