var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;
    const sum = Array(n+1).fill(0);
    for (let i=0;i<n;i++) sum[i+1] = sum[i]+nums[i];
    const w = Array(n-k+1).fill(0);
    for (let i=0;i<=n-k;i++) w[i] = sum[i+k]-sum[i];
    const left = Array(n-k+1).fill(0);
    let best = 0;
    for (let i=0;i<w.length;i++) {
        if (w[i]>w[best]) best=i;
        left[i]=best;
    }
    const right = Array(n-k+1).fill(0);
    best = w.length-1;
    for (let i=w.length-1;i>=0;i--) {
        if (w[i]>=w[best]) best=i;
        right[i]=best;
    }
    let ans = [-1,-1,-1];
    let maxSum=-1;
    for (let j=k;j<=w.length-k;j++) {
        const i = left[j-k], l = right[j+k];
        const total = w[i]+w[j]+w[l];
        if (total>maxSum) {
            maxSum=total;
            ans=[i,j,l];
        }
    }
    return ans;
};
