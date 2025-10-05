var countMaxOrSubsets = function(nums) {
  let maxOr = 0;
  for (let x of nums) maxOr |= x;
  let count = 0;
  const n = nums.length;
  function dfs(i, or) {
    if (i === n) {
      if (or === maxOr) count++;
      return;
    }
    dfs(i + 1, or);
    dfs(i + 1, or | nums[i]);
  }
  dfs(0, 0);
  return count;
};
