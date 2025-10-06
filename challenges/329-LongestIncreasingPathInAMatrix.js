var longestIncreasingPath = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let memo = Array.from({length: m}, () => Array(n).fill(0))
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    
    function dfs(x,y) {
        if (memo[x][y] !== 0) return memo[x][y]
        let best = 1
        for (let [dx,dy] of dirs) {
            let nx = x+dx, ny = y+dy
            if (nx>=0 && nx<m && ny>=0 && ny<n && matrix[nx][ny] > matrix[x][y]) {
                best = Math.max(best, 1 + dfs(nx,ny))
            }
        }
        memo[x][y] = best
        return best
    }
    
    let res = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i,j))
        }
    }
    return res
};
