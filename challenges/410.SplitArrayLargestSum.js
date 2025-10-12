/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {

    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);

    const canSplit = (maxSum) => {
        let count = 1;
        let current = 0;
        for (let num of nums) {
            if (current + num > maxSum) {
                count++;
                current = 0;
            }
            current += num;
        }
        return count <= k;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canSplit(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
