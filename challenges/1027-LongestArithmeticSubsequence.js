var longestArithSeqLength = function(nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => new Map());
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const len = (dp[j].get(diff) || 1) + 1;
      dp[i].set(diff, len);
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
};
