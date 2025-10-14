/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const lenA = nums1.length, lenB = nums2.length

    const table = new Array(lenA)
    // fromI, fromJ, taken
    for (const i of table.keys()) {
        const row = table[i] = new Array(lenB)
        for (const j of row.keys())
            row[j] = new Array(2)
    }
        
    
    function dp(fromI, fromJ, taken) {
        if (fromI === lenA || fromJ === lenB) {
            if (taken)  return 0
            return -Infinity
        }
        
        const existing = table[fromI][fromJ][taken]
        if (existing !== undefined)
            return existing
        
        let result = -Infinity
        result = Math.max(result, dp(1 + fromI, fromJ, taken))
        result = Math.max(result, dp(fromI, 1 + fromJ, taken))

        const a = nums1[fromI], b = nums2[fromJ], ab = a * b
        result = Math.max(result, ab + dp(1 + fromI, 1 + fromJ, 1))

        return table[fromI][fromJ][taken] = result
    }


    const result = dp(0, 0, 0)
    return result
};
