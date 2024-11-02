import { editDistance } from "./EditDistance";

export const WPM = (input, text, averageChars, correctChars, time, acc, deletedErrors) => {

    const distance = editDistance(input, text);
    console.log('distance: ' + distance);

    const netWPMdiv = document.getElementById('netWPM');

    const wordsDiv = document.querySelector('#words');
    const uncorrectedErrors = wordsDiv.querySelectorAll('.text-red-500').length;

    const errors = ((distance === uncorrectedErrors) ? distance : uncorrectedErrors);
    console.log('errors: ' + errors);
    
    const gross = input.length / 5;
    const netWPM = Math.floor((gross - errors) / (time / 60));

    const wpm = netWPM
    netWPMdiv.innerHTML = wpm;
    // console.log(input)
    // console.log(text)

}

// const LevenshteinDistance = (String1, String2) => {
//     const m = String1.length;
//     const n = String2.length;

//     // Create a matrix to store the distances
//     const dp = [];
//     for (let i = 0; i <= m; i++) {
//         dp[i] = [];
//         for (let j = 0; j <= n; j++) {
//             dp[i][j] = 0;
//         }
//     }

//     // Initialize the first row and column
//     for (let i = 0; i <= m; i++) {
//         dp[i][0] = i;
//     }
//     for (let j = 0; j <= n; j++) {
//         dp[0][j] = j;
//     }

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             const cost = String1[i - 1] === String2[j - 1] ? 0 : 1;
//             dp[i][j] = Math.min(
//                 dp[i - 1][j] + 1,      // Deletion
//                 dp[i][j - 1] + 1,      // Insertion
//                 dp[i - 1][j - 1] + cost // Substitution 
//             );
//         }
//     }

//     // Return the distance between the two words
//     return dp[m][n];
// }