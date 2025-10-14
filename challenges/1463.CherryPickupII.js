let cherryPickup = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dp = new Array(n).fill(null).map(() => new Array(m).fill(null).map(() => new Array(m).fill(0)));
  let cherries = 0;
  dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1];

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      for (let k = 0; k < m; ++k) {
        if (j > i || k < m - i - 1 || j > k) continue;

        dp[i][j][k] = dp[i - 1][j][k];

        if (j - 1 >= 0) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k]);
        }

        if (j - 1 >= 0 && k - 1 >= 0) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
        }

        if (j - 1 >= 0 && k + 1 < m) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);
        }

        if (j + 1 < m) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k]);
        }

        if (j + 1 < m && k - 1 >= 0) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
        }

        if (j + 1 < m && k + 1 < m) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);
        }

        if (k - 1 >= 0) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k - 1]);
        }

        if (k + 1 < m) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k + 1]);
        }

        if (j != k) {
          dp[i][j][k] += grid[i][j] + grid[i][k];
        }

        else {
          dp[i][j][k] += grid[i][j];
        }

        cherries = Math.max(cherries, dp[i][j][k]);
      }
    }
  }

  return cherries;
}
