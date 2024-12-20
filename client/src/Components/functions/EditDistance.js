export const editDistance = (str1, str2) => {
    // Handle empty strings, this situation is very unlikely to happen
    let length1 = str1.length;
    let length2 = str2.length;

    if (length1 === 0) return length2;
    if (length2 === 0) return length1;

    // initalize the matrix
    const dp = new Array(length1 +1).fill(null).map(() => new Array(length2 + 1).fill(null));

    for (let i = 0; i <= length1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= length2; j++) {
        dp[0][j] = j;
    }

    // Fill the DP table
    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // No edit needed if characters are the same
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],   // Deletion from str1
                    dp[i][j - 1],   // Insertion into str1
                    dp[i - 1][j - 1] // Substitution
                );
            }
        }
    }

    return dp[length1][length2];
}

