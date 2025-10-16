/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let sum = 0;
    let count = 0;
    let minLoss = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let x = num ^ k;

        if (x > num) {
            count++;
            sum += x;
        } else {
            sum += num;
        }

        let diff = num - x;
        if (diff < 0) diff = -diff; 

        if (diff < minLoss) {
            minLoss = diff;
        }
    }

    if (count % 2 === 0) {
        return sum;
    } else {
        return sum - minLoss;
    }
};
