var findNumberOfLIS = function(nums) {
  const n = nums.length;
  const len = Array(n).fill(1);
  const count = Array(n).fill(1);
  let maxLen = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (len[j] + 1 > len[i]) {
          len[i] = len[j] + 1;
          count[i] = count[j];
        } else if (len[j] + 1 === len[i]) {
          count[i] += count[j];
        }
      }
    }
    maxLen = Math.max(maxLen, len[i]);
  }
  let res = 0;
  for (let i = 0; i < n; i++) if (len[i] === maxLen) res += count[i];
  return res;
};
