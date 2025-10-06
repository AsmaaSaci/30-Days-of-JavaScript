var isRectangleCover = function(rectangles) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    let area = 0
    let set = new Set()
    for (let [x1,y1,x2,y2] of rectangles) {
        minX = Math.min(minX, x1)
        minY = Math.min(minY, y1)
        maxX = Math.max(maxX, x2)
        maxY = Math.max(maxY, y2)
        area += (x2-x1)*(y2-y1)
        for (let p of [[x1,y1],[x1,y2],[x2,y1],[x2,y2]]) {
            let key = p.join(',')
            if (set.has(key)) set.delete(key)
            else set.add(key)
        }
    }
    let expected = (maxX-minX)*(maxY-minY)
    if (area !== expected) return false
    if (set.size !== 4) return false
    return set.has([minX,minY].join(',')) &&
           set.has([minX,maxY].join(',')) &&
           set.has([maxX,minY].join(',')) &&
           set.has([maxX,maxY].join(','))
};
