/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    
    const n = startTime.length;
    const jobs = [];

    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }

    // we sort jobs by start time for suffix DP
    jobs.sort((a, b) => a.start - b.start);

    // dp[i] = max profit starting from job i
    const dp = new Array(n).fill(0);

    // Binary search helper to find next job that starts after current job ends
    function findNext(index) {
        let l = index + 1, r = n - 1, ans = n;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (jobs[m].start >= jobs[index].end) {
                ans = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return ans;
    }

    // we build DP from end to start
    for (let i = n - 1; i >= 0; i--) {
        const next = findNext(i);
        const include = jobs[i].profit + (next < n ? dp[next] : 0);
        const exclude = i + 1 < n ? dp[i + 1] : 0;
        dp[i] = Math.max(include, exclude);
    }

    return dp[0];
};
