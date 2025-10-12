var hitBricks = function (grid, hits) {
    let m = grid.length;
    let n = grid[0].length;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function isConnected(i, j) {
        if (i === 0) return true;
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 2) {
                return true;
            }
        }
        return false;
    }

    function DFS(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = 2;
        let sum = 1;
        for (let [dx, dy] of directions) {
            sum += DFS(i + dx, j + dy);
        }
        return sum;
    }
    for (let [i, j] of hits) {
        grid[i][j] -= 1;
    }
    for (let i = 0; i < n; i++) {
        DFS(0, i);
    }

    let res = [];

    for (let h = hits.length - 1; h >= 0; h--) {
        let [i, j] = hits[h];
        grid[i][j] += 1;
        if (grid[i][j] === 1 && isConnected(i, j)) {
            res.unshift(DFS(i, j) - 1);
        } else {
            res.unshift(0);
        }
    }
    return res;
};
