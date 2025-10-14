/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
    // reverse mapping: 
    // in `target`, val => idx of val 
    const val2idx = []
    for (const [i, val] of target.entries()) {
        val2idx[val] = i
    }


    // LIS-like algorithm
    const size2last = [-Infinity]
    for (const val of arr) {
        const idx = val2idx[val]
        if (idx === undefined)   continue

        let low = 0, high = size2last.length - 1
        // find latest low where 
        // size2last[low] < idx
        while (low < high) {
            const mid = (1 + low + high) >> 1
            if (size2last[mid] < idx)   low = mid
            else    high = mid - 1
        }

        const lowP = 1 + low
        const ext = size2last[lowP] ?? Infinity
        size2last[lowP] = Math.min(idx, ext)
    }


    const result = target.length - (size2last.length - 1)
    return result
};
