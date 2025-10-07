var bestRotation = function (nums) {
    let acc = new Uint32Array(100001);
    let n = nums.length;
    acc.fill(0, 0, n + 1);
    for (let i = 0; i < n; ++i) {
        ++acc[Math.min(i + 1, Math.max(0, i - nums[i] + 1))];
    }
    let bestInd = 0;
    let bestCnt = n - acc[0];
    let currCnt = bestCnt;
    for (let i = 1; i < n; ++i) {
        currCnt -= acc[i];
        if (nums[i - 1] < n) {
            ++currCnt;
            let exp = i + n - nums[i - 1];
            if (exp < n) ++acc[exp];
        }
        if (currCnt > bestCnt) {
            bestCnt = currCnt;
            bestInd = i;
        }
    }
    return bestInd;
};
