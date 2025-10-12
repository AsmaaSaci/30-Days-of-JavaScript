var intersectionSizeTwo = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let setSize = 0, stack = [], i = 0
    while (true) {
        let l = i == intervals.length ? Number.MAX_SAFE_INTEGER : intervals[i][0]
        let r = i == intervals.length ? Number.MAX_SAFE_INTEGER : intervals[i][1]
        while (stack.length) {
            let min = stack.reduce((prev, item) => Math.min(prev, item[1] - item[2] + 1), Number.MAX_SAFE_INTEGER)
            if (min < l) {
                setSize++
                stack = stack.filter(item => {
                    if (item[2] == 1) return false
                    item[2]--
                    return true
                })
                continue
            }
            break
        }
        if (i == intervals.length) return setSize
        stack.push([l, r, 2])
        i++
    }
};
