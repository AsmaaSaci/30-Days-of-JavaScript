var canCross = function(stones) {
    let n = stones.length
    let map = new Map()
    for (let s of stones) map.set(s, new Set())
    map.get(0).add(0)
    for (let s of stones) {
        for (let k of map.get(s)) {
            for (let step of [k-1,k,k+1]) {
                if (step > 0 && map.has(s+step)) {
                    map.get(s+step).add(step)
                }
            }
        }
    }
    return map.get(stones[n-1]).size > 0
};
