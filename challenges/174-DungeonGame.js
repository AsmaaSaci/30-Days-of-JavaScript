/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length, n = dungeon[0].length
    let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(Infinity))
    dp[m][n - 1] = 1
    dp[m - 1][n] = 1
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let need = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
            dp[i][j] = Math.max(1, need)
        }
    }
    return dp[0][0]
};
