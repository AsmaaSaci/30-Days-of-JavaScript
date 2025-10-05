var countGoodStrings = function(low, high, zero, one) {
    let mod = 1e9 + 7;
    let dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= high; i++) {
        if (i - zero >= 0) dp[i] = (dp[i] + dp[i - zero]) % mod;
        if (i - one >= 0) dp[i] = (dp[i] + dp[i - one]) % mod;
    }
    let res = 0;
    for (let i = low; i <= high; i++) res = (res + dp[i]) % mod;
    return res;
};
