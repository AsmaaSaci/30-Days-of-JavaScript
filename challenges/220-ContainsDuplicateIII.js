var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    if (valueDiff < 0) return false
    let map = new Map()
    let size = valueDiff + 1
    function getBucket(x) {
        return Math.floor(x / size)
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let bucket = getBucket(num)
        if (map.has(bucket)) return true
        if (map.has(bucket-1) && Math.abs(num - map.get(bucket-1)) <= valueDiff) return true
        if (map.has(bucket+1) && Math.abs(num - map.get(bucket+1)) <= valueDiff) return true
        map.set(bucket, num)
        if (i >= indexDiff) {
            let oldBucket = getBucket(nums[i-indexDiff])
            map.delete(oldBucket)
        }
    }
    return false
};
