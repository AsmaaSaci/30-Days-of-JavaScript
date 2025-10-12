let maxRotateFunction = function (nums) {
    const n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let f = nums.reduce((acc, val, i) => acc + i * val, 0);
    let max = f;

    for (let i = 1; i < n; i++) {
        f = f + totalSum - n * nums[n - i];
        max = Math.max(max, f);
    }

    return max;
}
