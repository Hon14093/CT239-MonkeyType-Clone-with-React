export default function averageCharsPerWord(inputString) {
    inputString = inputString.trim();

    const words = inputString.split(" ");
    if (words.length === 0) {
        return 0;
    } else if (words.length === 1) {
        return words[0].length;
    }

    const totalChars = words.reduce((acc, word) => acc + word.length, 0);
    const wordCount = words.length;

    return Math.floor(totalChars / wordCount);
}