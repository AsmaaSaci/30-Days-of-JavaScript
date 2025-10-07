/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
    let x = 0;
    for (let num of nums) x ^= num;
    return x === 0 || nums.length % 2 === 0;
};
