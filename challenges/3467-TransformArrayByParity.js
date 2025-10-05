var transformArray = function(nums) {
  let changed = true;
  while (changed) {
    changed = false;
    const arr = nums.slice();
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        arr[i]--;
        changed = true;
      } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
        arr[i]++;
        changed = true;
      }
    }
    nums = arr;
  }
  return nums;
};
