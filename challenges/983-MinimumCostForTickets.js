var mincostTickets = function(days, costs) {
    let n = days.length;
    let dp = new Array(n).fill(0);
    dp[0] = Math.min(costs[0], costs[1], costs[2]);
    for (let i = 1; i < n; i++) {
        let one = costs[0] + dp[i - 1];
        let j = i;
        while (j >= 0 && days[i] - days[j] < 7) j--;
        let seven = costs[1] + (j >= 0 ? dp[j] : 0);
        j = i;
        while (j >= 0 && days[i] - days[j] < 30) j--;
        let thirty = costs[2] + (j >= 0 ? dp[j] : 0);
        dp[i] = Math.min(one, seven, thirty);
    }
    return dp[n - 1];
};
