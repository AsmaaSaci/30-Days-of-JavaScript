var maxCoins = function(nums) {
    let n = nums.length
    let arr = [1, ...nums, 1]
    let dp = Array.from({length: n+2}, () => Array(n+2).fill(0))
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left <= n-len+1; left++) {
            let right = left + len - 1
            for (let k = left; k <= right; k++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    arr[left-1]*arr[k]*arr[right+1] + dp[left][k-1] + dp[k+1][right]
                )
            }
        }
    }
    return dp[1][n]
};
