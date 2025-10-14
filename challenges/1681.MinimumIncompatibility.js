var minSum = Number.MAX_SAFE_INTEGER;

var recur = function(curIdx, subsets, nums, k, countOfEveryGroup, currentSum) {
    if (curIdx === nums.length && currentSum < minSum) {
        minSum = currentSum;
        return;
    }
    var curNum = nums[curIdx];
    for (var subsetIdx = 0; subsetIdx < subsets.length; subsetIdx++) {
        var subset = subsets[subsetIdx];
        if (subset.length >= countOfEveryGroup || subset.indexOf(curNum) !== -1) continue;
        var minOfCurSubSet = Math.min(...subset);
        var maxOfCurSubSet = Math.max(...subset);
        subset.push(curNum);
        var shouldAddToSum = 0;
        if (curNum > maxOfCurSubSet) {
            shouldAddToSum += (curNum - maxOfCurSubSet);
        } else if (curNum < minOfCurSubSet) {
            shouldAddToSum += (minOfCurSubSet - curNum);
        }
        var newSum = currentSum + shouldAddToSum;
        if (newSum < minSum) {
            recur(curIdx + 1, subsets, nums, k, countOfEveryGroup, newSum);
        }
        subset.pop();
    }
    if (subsets.length < k) {
        var newSubset = [curNum];
        subsets.push(newSubset);
        recur(curIdx + 1, subsets, nums, k, countOfEveryGroup, currentSum);
        subsets.pop();
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function(nums, k) {
    if (k === 0) return -1;
    var numsCount = nums.length;
    var countOfEveryGroup = numsCount / k;
    var numCountArr = new Array(16).fill(0);
    nums.forEach(num => numCountArr[num]++);
    if (numCountArr.some(count => count > k)) return -1;
    if (k === 1) return Math.max(...nums) - Math.min(...nums);
    minSum = Number.MAX_SAFE_INTEGER;
    
    recur(0, [], nums, k, countOfEveryGroup, 0);
    return minSum;
};
