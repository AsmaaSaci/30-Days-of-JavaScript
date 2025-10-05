var longestSubsequence = function(arr, difference) {
  const dp = new Map();
  let maxLen = 0;
  for (let num of arr) {
    const len = (dp.get(num - difference) || 0) + 1;
    dp.set(num, len);
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
};
