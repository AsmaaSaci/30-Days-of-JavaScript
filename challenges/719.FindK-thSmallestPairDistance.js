/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.at(-1) - nums[0];

    const countPairs = (maxDist) => {
        let count = 0;
        let j = 0;
        for (let i = 0; i < nums.length-1; i++) {
            while (j < nums.length && nums[j] - nums[i] <= maxDist) {
                j++;
            }
            count += j - i - 1;
        }
        return count;
    };

    while (left < right) {
        
        const mid = Math.floor((left + right) / 2);
        const count = countPairs(mid);

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
    
};
