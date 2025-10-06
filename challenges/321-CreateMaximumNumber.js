var maxNumber = function(nums1, nums2, k) {
    function maxSubsequence(nums, k) {
        let stack = []
        let drop = nums.length - k
        for (let num of nums) {
            while (drop > 0 && stack.length && stack[stack.length-1] < num) {
                stack.pop()
                drop--
            }
            stack.push(num)
        }
        return stack.slice(0, k)
    }

    function merge(a, b) {
        let res = []
        while (a.length || b.length) {
            if (a > b) res.push(a.shift())
            else res.push(b.shift())
        }
        return res
    }

    let best = []
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        let cand = merge(maxSubsequence(nums1, i), maxSubsequence(nums2, k-i))
        if (cand.join("") > best.join("")) best = cand
    }
    return best
};
