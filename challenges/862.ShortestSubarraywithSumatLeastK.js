/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);

  // Compute prefix sums
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let result = Infinity;
  const deque = [];

  for (let i = 0; i <= n; i++) {
    // Remove indices from the front of the deque if the subarray sum is >= k
    while (deque.length > 0 && prefix[i] - prefix[deque[0]] >= k) {
      result = Math.min(result, i - deque.shift());
    }

    // Remove indices from the back of the deque if they are no longer useful
    while (deque.length > 0 && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }

    // Add the current index to the deque
    deque.push(i);
  }

  return result === Infinity ? -1 : result;
};
