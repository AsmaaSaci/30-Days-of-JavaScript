var minimumOperations = function(nums) {
  let ops = 0;
  for (let x of nums) if (x % 3 !== 0) ops++;
  return ops;
};
