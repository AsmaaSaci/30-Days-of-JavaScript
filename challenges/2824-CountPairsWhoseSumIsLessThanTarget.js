var countPairs = function(nums, target) {
    nums.sort((a,b) => a-b)
    let left = 0, right = nums.length - 1, count = 0
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left
            left++
        } else {
            right--
        }
    }
    return count
};
