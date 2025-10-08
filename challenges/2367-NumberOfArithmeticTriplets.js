/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let set = new Set(nums);
    let count = 0;
    for (let x of nums) {
        if (set.has(x + diff) && set.has(x + 2 * diff)) count++;
    }
    return count;
};
