var minOperations = function(nums, k) {
  if (k === 0) return 0;
  const sum = nums.reduce((a, b) => a + b, 0);
  return ((sum % k) + k) % k;
};
