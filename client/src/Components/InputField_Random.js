export const handleKeyboardInput = (e) => {

    function removeBG() {
        const elements = document.getElementsByClassName('UNIKEY');
        for (const element of elements) {
            element.classList.remove('bg-chaosPink');
        }

        const spaceBar = document.getElementById('SPACE');
        spaceBar.classList.remove('bg-chaosPink');
    }

    function randomCharacter() {
        removeBG();

        const characters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
            '4', '5', '6', '7', '8', '9', ',', '.', ';', '[',
            ']', '/', 'SPACE'
        ];  
    
        const random = Math.floor(Math.random() * characters.length);
        const randomDiv = document.getElementById(characters[random]);
        if (randomDiv) {
            randomDiv.classList.add('bg-chaosPink');
        }

        if (characters[random] === 'SPACE') {
            window.key = ' ';
        }
        else window.key = characters[random].toLowerCase();
    }

    const key = e.key;
    let correctCount = document.getElementById('correctCount');
    let incorrectCount = document.getElementById('incorrectCount');

    let correctCountInt = parseInt(correctCount.innerHTML);
    let incorrectCountInt = parseInt(incorrectCount.innerHTML);
    
    let acc = (correctCountInt / (correctCountInt + incorrectCountInt)) * 100;
    // console.log([correctCountInt, incorrectCountInt])
    // console.log(acc);

    if (key === window.key) {
        randomCharacter();
        correctCount.innerHTML++;

        if (incorrectCount.innerHTML !== '0') {
            document.getElementById('accRandom').innerHTML = acc.toFixed(2) + '%';
        }
        
    } else {
        incorrectCount.innerHTML++;
        if (incorrectCount.innerHTML !== '0') {
            document.getElementById('accRandom').innerHTML = acc.toFixed(2) + '%';
        }
    }
}