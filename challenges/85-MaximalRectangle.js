var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0) return 0
    let m = matrix.length, n = matrix[0].length
    let heights = new Array(n).fill(0), res = 0
    function largest(h) {
        let stack = [], max = 0
        for (let i = 0; i <= h.length; i++) {
            let cur = i === h.length ? 0 : h[i]
            while (stack.length && cur < h[stack[stack.length-1]]) {
                let height = h[stack.pop()]
                let left = stack.length ? stack[stack.length-1] : -1
                max = Math.max(max, height * (i - left - 1))
            }
            stack.push(i)
        }
        return max
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0
        }
        res = Math.max(res, largest(heights))
    }
    return res
};
