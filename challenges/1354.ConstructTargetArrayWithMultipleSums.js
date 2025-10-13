/**
 * @param {number[]} T
 * @return {boolean}
 */
var isPossible = function(T) {
  if (T.length === 1 && T[0] !== 1) return false
  let sum = T.reduce((a, b) => a + b)
  T.sort((a, b) => b - a)

  while (sum !== T.length) {
    let m = T[0] - (sum - T[0]) * (Math.trunc(T[0] / (sum - T[0]) - 1) || 1);
    [sum, T[0]] = [sum - T[0] + m, m]
    if (T[0] < 1) return false
    for (let i = 0; T[i] < T[i+1]; i++) [T[i], T[i+1]] = [T[i+1], T[i]]
  }
  
  return true
};
