var getSkyline = function(buildings) {
    let events = []
    for (let [l, r, h] of buildings) {
        events.push([l, -h])
        events.push([r, h])
    }
    events.sort((a,b) => a[0] - b[0] || a[1] - b[1])

    let res = [], heights = [0]
    let map = new Map()
    map.set(0, 1)
    function add(h) { map.set(h, (map.get(h)||0)+1) }
    function remove(h) {
        map.set(h, map.get(h)-1)
        if (map.get(h) === 0) map.delete(h)
    }
    function maxHeight() { return Math.max(...map.keys()) }

    for (let [x, h] of events) {
        if (h < 0) add(-h)
        else remove(h)
        let maxH = maxHeight()
        if (res.length === 0 || res[res.length-1][1] !== maxH) {
            res.push([x, maxH])
        }
    }
    return res
};
