var countRangeSum = function(nums, lower, upper) {
    let n = nums.length
    let prefix = new Array(n+1).fill(0)
    for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + nums[i]

    function mergeSort(lo, hi) {
        if (hi - lo <= 1) return 0
        let mid = Math.floor((lo + hi) / 2)
        let count = mergeSort(lo, mid) + mergeSort(mid, hi)
        let j = mid, k = mid, t = mid
        let cache = []
        for (let i = lo; i < mid; i++) {
            while (k < hi && prefix[k] - prefix[i] < lower) k++
            while (j < hi && prefix[j] - prefix[i] <= upper) j++
            while (t < hi && prefix[t] < prefix[i]) cache.push(prefix[t++])
            cache.push(prefix[i])
            count += j - k
        }
        for (let i = 0; i < cache.length; i++) prefix[lo+i] = cache[i]
        return count
    }

    return mergeSort(0, prefix.length)
};
