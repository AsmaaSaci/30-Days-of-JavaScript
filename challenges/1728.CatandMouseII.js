/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
var canMouseWin = function (grid, catJump, mouseJump) {
    let mouse
    let cat
    let food
    let n = grid.length
    let m = grid[0].length
    let directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 'M') {
                mouse = [i, j]
            }
            if (grid[i][j] === 'C') {
                cat = [i, j]
            }
            if (grid[i][j] === 'F') {
                food = [i, j]
            }
        }
    }
    function within(x, y) {
        if (x < 0 ||
            x >= n ||
            y < 0 ||
            y >= m) return false
        return true
    }
    let dp = new Map()
    function dfs(mx, my, cx, cy, turn) {
        if (turn >= 100) return false
        let [fx, fy] = food
        if (mx === cx && my == cy) return false
        if (fx === mx && fy === my) return true
        if (fx === cx && fy === cy) return false
        let key = `${mx}|${my}|${cx}|${cy}|${turn}`
        if (dp.has(key)) return dp.get(key)
        if (turn % 2 === 0) {
            // mouse
            for (let [dr, dc] of directions) {
                for (let j = 0; j <= mouseJump; j++) {
                    let nr = mx + dr * j
                    let nc = my + dc * j
                    if (!within(nr, nc)) break
                    if (grid[nr][nc] === '#') break
                    if (dfs(nr, nc, cx, cy, turn + 1)) {
                        dp.set(key, true)
                        return true
                    }
                }
            }
            dp.set(key, false)
            return false
        } else {
            // cat
            for (let [dr, dc] of directions) {
                for (let j = 0; j <= catJump; j++) {
                    let nr = cx + dr * j
                    let nc = cy + dc * j
                    if (!within(nr, nc)) break
                    if (grid[nr][nc] === '#') break
                    if (!dfs(mx, my, nr, nc, turn + 1)) {
                        dp.set(key, false)
                        return false
                    }
                }
            }
            dp.set(key, true)
            return true
        }
    }
    let [mx, my] = mouse
    let [cx, cy] = cat
    return dfs(mx, my, cx, cy, 0)
};
