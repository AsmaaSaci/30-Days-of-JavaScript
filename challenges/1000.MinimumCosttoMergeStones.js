/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k, total = 0) {
    const n = stones.length;
    
    // Check if it's impossible to merge the stones with the given pattern
    if ((n - 1) % (k - 1) !== 0) {
        return -1;
    }
    
    // Initialize the dp array
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    // Calculate prefix sums
    const prefixSum = [0];
    for (let i = 0; i < n; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + stones[i]);
    }
    
    // Dynamic programming approach
    for (let len = k; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;
            for (let mid = i; mid < j; mid += k - 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);
            }
            if ((j - i) % (k - 1) === 0) {
                dp[i][j] += prefixSum[j + 1] - prefixSum[i];
            }
        }
    }
    
    return dp[0][n - 1];
};
