var subsetXORSum = function(nums) {
  let res = 0;
  const n = nums.length;
  function dfs(i, val) {
    if (i === n) {
      res += val;
      return;
    }
    dfs(i + 1, val ^ nums[i]);
    dfs(i + 1, val);
  }
  dfs(0, 0);
  return res;
};
