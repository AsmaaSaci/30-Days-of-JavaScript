const rob = nums => {
    const n = nums.length;
    if (n === 1) return nums[0];

    const helper = (start, end) => {
        let prev1 = 0, prev2 = 0;

        for (let i = start; i < end; i++) {
            const temp = prev1;
            prev1 = Math.max(prev1, nums[i] + prev2);
            prev2 = temp;
        }

        return prev1;
    };

    return Math.max(helper(0, n - 1), helper(1, n));
}
