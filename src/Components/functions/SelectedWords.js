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

    const LevenshteinDistance = (String1, String2) => {
        const m = String1.length;
        const n = String2.length;

        // Create a matrix to store the distances
        const dp = [];
        for (let i = 0; i <= m; i++) {
            dp[i] = [];
            for (let j = 0; j <= n; j++) {
                dp[i][j] = 0;
            }
        }

        // Initialize the first row and column
        for (let i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= n; j++) {
            dp[0][j] = j;
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const cost = String1[i - 1] === String2[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,      // Deletion
                    dp[i][j - 1] + 1,      // Insertion
                    dp[i - 1][j - 1] + cost // Substitution 
                );
            }
        }

        // Return the distance between the two words
        return dp[m][n];
    }

    const distance = LevenshteinDistance('Helio', 'Hello');

    return selectedWords;
}