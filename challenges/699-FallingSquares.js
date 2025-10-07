var fallingSquares = function(positions) {
    const result = [];
    const intervals = [];
    let maxH = 0;
    for (let [left, size] of positions) {
        const right = left + size;
        let base = 0;
        for (let [s, e, h] of intervals) {
            if (Math.max(left, s) < Math.min(right, e)) {
                base = Math.max(base, h);
            }
        }
        const newH = base + size;
        intervals.push([left, right, newH]);
        maxH = Math.max(maxH, newH);
        result.push(maxH);
    }
    return result;
};
