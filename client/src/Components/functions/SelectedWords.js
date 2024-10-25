export const SelectedWords = (words, selectedLength) => {

    const KnuthShuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const x = Math.floor(Math.random() * (i + 1));
            [array[i], array[x]] = [array[x], array[i]];
        }
        return array;
    };

    const shuffledWords = KnuthShuffle(words);
    const selectedWords = shuffledWords.slice(0, selectedLength);

    return selectedWords;
}

// this file is used in English, English1k, English5k