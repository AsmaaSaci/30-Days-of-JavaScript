var getSneakyNumbers = function(nums) {
  const seen = new Set();
  const res = [];
  for (let num of nums) {
    if (seen.has(num)) res.push(num);
    else seen.add(num);
  }
  return res;
};
