/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {

    const MOD = 1e9 + 7;

    const dp = Array.from({ length: n + 1 }, () =>
                            Array.from({ length: 6 }, () =>
                                Array(16).fill(0)
                            )
    );

    for (let j = 0; j < 6; j++) {
        dp[1][j][1] = 1;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < 6; j++) {
            for (let k = 1; k <= rollMax[j]; k++) {
                for (let p = 0; p < 6; p++) {
                    if (p === j && k < rollMax[j]) {
                        dp[i][j][k + 1] = (dp[i][j][k + 1] + dp[i - 1][j][k]) % MOD;
                    } else if (p !== j) {
                        dp[i][p][1] = (dp[i][p][1] + dp[i - 1][j][k]) % MOD;
                    }
                }
            }
        }
    }

    let result = 0;
    for (let j = 0; j < 6; j++) {
        for (let k = 1; k <= rollMax[j]; k++) {
            result = (result + dp[n][j][k]) % MOD;
        }
    }

    return result;
    
};
