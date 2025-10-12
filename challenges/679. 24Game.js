/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    const eps = 1e-6;
    function solve(nums) {
        if (nums.length === 1) return Math.abs(nums[0] - 24) < eps;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                let next = [];
                for (let k = 0; k < nums.length; k++)
                    if (k !== i && k !== j) next.push(nums[k]);
                for (let op = 0; op < 4; op++) {
                    if (op < 2 && j > i) continue;
                    let a = nums[i], b = nums[j];
                    if (op === 0) next.push(a + b);
                    if (op === 1) next.push(a * b);
                    if (op === 2) next.push(a - b);
                    if (op === 3 && Math.abs(b) > eps) next.push(a / b);
                    if (next.length === nums.length - 1 && solve(next)) return true;
                    next.pop();
                }
            }
        }
        return false;
    }
    return solve(cards.map(x => x * 1));
};8
