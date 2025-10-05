var transformArray = function(nums) {
  return nums.map(n => n % 2 === 0 ? 0 : 1).sort((a, b) => a - b);
};
