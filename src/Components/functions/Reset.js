export const reset = () => {
    const wordsBox = document.getElementById('words');
    // const activeWord = wordsBox.querySelector('div.word.active') ?? null;
    const firstLetter = wordsBox.querySelector('span.letter:first-child') ?? null;
    const cursor = document.getElementById('cursor');
    console.log(firstLetter.innerHTML);

    document.getElementById('textBox').classList.remove('over');

    wordsBox.querySelectorAll('span.letter').forEach(letter => {
        letter.classList.remove('text-white', 'text-red-500', 'current');
    });

    wordsBox.querySelectorAll('.active').forEach(activeWord => {
        activeWord.classList.remove('active');
    });
    
    
    const extraLetters = document.querySelectorAll('.extra');
    if (extraLetters.length > 0) {
        // remove all extra letters
        extraLetters.forEach(extra => {
            extra.remove();
        })
    }
    
    wordsBox.firstChild.classList.add('active');
    firstLetter.classList.add('current');

    // reset cursor to the first letter
    cursor.style.left = wordsBox.getBoundingClientRect().left - 2 + 'px';
}