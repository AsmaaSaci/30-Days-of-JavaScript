var pivotArray = function(nums, pivot) {
  const less = [], equal = [], greater = [];
  for (let x of nums) {
    if (x < pivot) less.push(x);
    else if (x === pivot) equal.push(x);
    else greater.push(x);
  }
  return [...less, ...equal, ...greater];
};
