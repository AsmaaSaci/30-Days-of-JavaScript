var numIdenticalPairs = function(nums) {
  const freq = new Map();
  let count = 0;
  for (let x of nums) {
    if (freq.has(x)) {
      count += freq.get(x);
      freq.set(x, freq.get(x) + 1);
    } else {
      freq.set(x, 1);
    }
  }
  return count;
};
