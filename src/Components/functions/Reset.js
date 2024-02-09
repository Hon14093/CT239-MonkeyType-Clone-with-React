export const reset = () => {
    const wordsBox = document.getElementById('words');
    const activeWord = wordsBox.querySelector('div.word.active');
    const firstLetter = activeWord.querySelector('span.letter:first-child');
    const cursor = document.getElementById('cursor');
    console.log('reset');

    wordsBox.querySelectorAll('span.letter').forEach(letter => {
        letter.classList.remove('text-white', 'text-red-500', 'current');
    });
    
    wordsBox.firstChild.classList.add('active');
    firstLetter.classList.add('current');

    // reset cursor to the first letter
    cursor.style.left = wordsBox.getBoundingClientRect().left - 2 + 'px';
}