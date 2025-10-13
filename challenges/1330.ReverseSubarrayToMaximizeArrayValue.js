/**************************\U0001f60e**************************/
const maxValueAfterReverse = (nums) => {
  const n = nums.length;
  if (n < 2) return 0;

  let totalDiff = 0;
  let maxGain = 0;

  let increasingLeft = null;
  let increasingRight = null;
  let decreasingLeft = null;
  let decreasingRight = null;

  const getDelta = (i, j) =>
    Math.abs(nums[i] - nums[j]) +
    Math.abs(nums[i + 1] - nums[j + 1]) -
    Math.abs(nums[i] - nums[i + 1]) -
    Math.abs(nums[j] - nums[j + 1]);

  const first = nums[0];
  const last = nums[n - 1];

  for (let i = 0; i < n - 1; i++) {
    const a = nums[i];
    const b = nums[i + 1];
    totalDiff += Math.abs(a - b);

    maxGain = Math.max(
      maxGain,
      Math.max(Math.abs(last - a), Math.abs(first - b)) - Math.abs(a - b)
    );

    if (increasingLeft !== null) maxGain = Math.max(maxGain, getDelta(increasingLeft, i));
    if (increasingRight !== null) maxGain = Math.max(maxGain, getDelta(increasingRight, i));
    if (decreasingLeft !== null) maxGain = Math.max(maxGain, getDelta(decreasingLeft, i));
    if (decreasingRight !== null) maxGain = Math.max(maxGain, getDelta(decreasingRight, i));

    if (a <= b) {
      if (increasingLeft === null || nums[increasingLeft] < a) increasingLeft = i;
      if (increasingRight === null || nums[increasingRight + 1] > b) increasingRight = i;
    }
    if (a >= b) {
      if (decreasingLeft === null || nums[decreasingLeft] > a) decreasingLeft = i;
      if (decreasingRight === null || nums[decreasingRight + 1] < b) decreasingRight = i;
    }
  }

  return totalDiff + maxGain;
};
