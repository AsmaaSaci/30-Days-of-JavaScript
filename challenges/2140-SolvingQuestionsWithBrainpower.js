var mostPoints = function(questions) {
    let n = questions.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let [points, brainpower] = questions[i];
        let skip = dp[i + 1];
        let solve = points + (i + brainpower + 1 <= n ? dp[i + brainpower + 1] : 0);
        dp[i] = Math.max(skip, solve);
    }
    return dp[0];
};
