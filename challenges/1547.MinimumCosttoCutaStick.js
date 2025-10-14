/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
// var minCost = function(n, cuts) {
//     cuts.push(0, n);
//     cuts.sort((a, b) => a - b);
//     const m = cuts.length;
//     const dp = Array.from({ length: m }, () => Array(m).fill(0));

//     for (let length = 2; length < m; length++) {
//         for (let i = 0; i < m - length; i++) {
//             let j = i + length;
//             dp[i][j] = Infinity;
//             for (let k = i + 1; k < j; k++) {
//                 dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j]);
//             }
//         }
//     }

//     return dp[0][m - 1];
// };








var minCost = function(n, cuts) {
    cuts.push(0, n);
    cuts.sort((a, b) => a - b);

    const m = cuts.length;
    const dp = Array.from({ length: m }, () => Array(m).fill(0));

    for (let len = 2; len < m; len++) {
        for (let i = 0; i + len < m; i++) {
            const j = i + len;
            let minCost = Infinity;

            // Try all possible cuts between i and j
            for (let k = i + 1; k < j; k++) {
                const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j];
                if (cost < minCost) {
                    minCost = cost;
                }
            }

            dp[i][j] = minCost;
        }
    }

    return dp[0][m - 1];
};
