var minSwap = function (nums1, nums2) {
    nums1.unshift(-1);
    nums2.unshift(-1);
    let swapp = noSwap = currSwap = currNoSwap = 0;
    const swap = (prev1, prev2) => [prev2, prev1];
    for (let index = nums1.length - 1; index >= 1; index--) {
        for (let swapped = 1; swapped >= 0; swapped--) {
            let ans = Number.MAX_SAFE_INTEGER;
            let prev1 = nums1[index - 1];
            let prev2 = nums2[index - 1];
            if (swapped) {
                [prev1, prev2] = swap(prev1, prev2);
            }

            if (nums1[index] > prev1 && nums2[index] > prev2) {
                ans = noSwap;
            }

            if (nums1[index] > prev2 && nums2[index] > prev1) {
                ans = Math.min(ans, 1 + swapp);
            }

            if (swapped) {
                currSwap = ans;
            } else {
                currNoSwap = ans;
            }
        }
        swapp = currSwap;
        noSwap = currNoSwap;
    }
    return Math.min(swapp, noSwap);
};
