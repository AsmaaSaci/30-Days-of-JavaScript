var connectTwoGroups = function(cost) {
  let n = cost.length, m = cost[0].length; // n = size of group1, m = size of group2
  let minCost = Array(m).fill(Infinity); // minCost[j] = minimum cost to connect point j (from group2) to a point in group1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      minCost[j] = Math.min(minCost[j], cost[i][j]);
    }
  }
  let memo = Array(n).fill(0).map(() => Array(1 << m).fill(-1));
  return dp(0, 0);
  
  function dp(i, mask) {
    if (i === n) {
      let cost = 0;
      for (let j = 0; j < m; j++) {
        if (((mask >> j) & 1) === 0) cost += minCost[j];
      }
      return cost;
    }
    if (memo[i][mask] !== -1) return memo[i][mask];
    
    let ans = Infinity;
    for (let j = 0; j < m; j++) {
      ans = Math.min(ans, dp(i + 1, mask | (1 << j)) + cost[i][j]);
    }
    return memo[i][mask] = ans;
  }  
};
