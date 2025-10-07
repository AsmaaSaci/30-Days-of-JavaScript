var profitableSchemes = function(n, minProfit, group, profit) {
    const MOD = 1e9+7;
    const m = group.length;
    const dp = Array.from({length:n+1},()=>Array(minProfit+1).fill(0));
    dp[0][0]=1;
    for(let k=0;k<m;k++){
        const g = group[k], p = profit[k];
        for(let people=n; people>=g; people--){
            for(let prof=minProfit; prof>=0; prof--){
                const np = Math.min(minProfit, prof+p);
                dp[people][np] = (dp[people][np] + dp[people-g][prof]) % MOD;
            }
        }
    }
    let ans=0;
    for(let people=0; people<=n; people++){
        ans=(ans+dp[people][minProfit])%MOD;
    }
    return ans;
};
