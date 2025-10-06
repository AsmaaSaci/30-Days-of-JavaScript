var countPoints = function(points, queries) {
    let res = []
    for (let [x, y, r] of queries) {
        let cnt = 0
        for (let [px, py] of points) {
            let dx = px - x, dy = py - y
            if (dx * dx + dy * dy <= r * r) cnt++
        }
        res.push(cnt)
    }
    return res
};
