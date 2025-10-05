var buildArray = function(nums) {
  const n = nums.length;
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = nums[nums[i]];
  }
  return res;
};
