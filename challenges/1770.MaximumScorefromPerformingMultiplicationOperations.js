var maximumScore = function(nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const best = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0));
  
  for (let i = 1; i <= m; i += 1) {
    best[i][0] += best[i-1][0] + nums[n-i] * multipliers[i-1];
    best[0][i] += best[0][i-1] + nums[i-1] * multipliers[i-1];
  }
  
  let max = Math.max(best[m][0], best[0][m]);
  
  
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= m - i; j += 1) {
      best[i][j] = Math.max(
        best[i-1][j] + nums[n - i] * multipliers[i + j - 1],
        best[i][j-1] + nums[j - 1] * multipliers[i + j - 1],
      );
    }
    max = Math.max(max, best[i][m-i]);
  }
  
  return max;
};
