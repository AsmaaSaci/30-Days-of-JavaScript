/**************************\U0001f60e**************************/
function minNumberOperations(target) {
  let n = target.length;
  let ans = target[0];
  for (let i = 1; i < n; i += 1) ans += Math.max(target[i] - target[i - 1], 0);
  return ans;
};
