var sumSubseqWidths = function(nums) {
    const MOD = 1e9+7;
    nums.sort((a,b)=>a-b);
    const n = nums.length;
    let pow2 = Array(n).fill(1);
    for(let i=1;i<n;i++) pow2[i]=(pow2[i-1]*2)%MOD;
    let res=0n;
    for(let i=0;i<n;i++){
        const maxContrib = BigInt(pow2[i]);
        const minContrib = BigInt(pow2[n-1-i]);
        res += (maxContrib - minContrib) * BigInt(nums[i]);
    }
    return Number((res%BigInt(MOD)+BigInt(MOD))%BigInt(MOD));
};
