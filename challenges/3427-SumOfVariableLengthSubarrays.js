const subarraySum = (nums) => {
    const prefix = nums.reduce((arr, v) => [...arr, arr.at(-1) + v], [0]);
    return nums.reduce((sum, v, i) => sum + prefix[i + 1] - prefix[Math.max(0, i - v)], 0)
};
