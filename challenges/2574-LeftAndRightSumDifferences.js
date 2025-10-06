var leftRightDifference = function(nums) {
    let n = nums.length
    let left = new Array(n).fill(0)
    let right = new Array(n).fill(0)
    for (let i = 1; i < n; i++) left[i] = left[i-1] + nums[i-1]
    for (let i = n-2; i >= 0; i--) right[i] = right[i+1] + nums[i+1]
    let res = []
    for (let i = 0; i < n; i++) res.push(Math.abs(left[i] - right[i]))
    return res
};
