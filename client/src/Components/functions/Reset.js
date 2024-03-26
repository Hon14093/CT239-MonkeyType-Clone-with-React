export const reset = () => {

    const wordsBox = document.getElementById('words');
    const firstLetter = wordsBox.querySelector('span.letter:first-child') ?? null;
    const cursor = document.getElementById('cursor');

    document.getElementById('lineChart').classList.add('hidden');
    document.getElementById('textBox').classList.remove('over', 'hidden');
    document.getElementById('selectLanguage').classList.remove('opacity-0');
    document.getElementById('resetGame1').classList.remove('hidden');
    document.getElementById('top').classList.remove('opacity-0');


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

    window.timeArray = null;
    window.wpmArray = null;
}