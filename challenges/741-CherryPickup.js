/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const memo = new Map();
    
    function dp(r1, c1, r2) {
        const c2 = r1 + c1 - r2;
        if (r1 >= n || c1 >= n || r2 >= n || c2 >= n) return -Infinity;
        if (grid[r1][c1] === -1 || grid[r2][c2] === -1) return -Infinity;
        
        if (r1 === n - 1 && c1 === n - 1) return grid[r1][c1]; // وصلوا للنهاية
        
        const key = `${r1},${c1},${r2}`;
        if (memo.has(key)) return memo.get(key);
        
        let cherries = grid[r1][c1];
        if (r1 !== r2 || c1 !== c2) {
            cherries += grid[r2][c2];
        }
        
        let best = Math.max(
            dp(r1 + 1, c1, r2 + 1), // down, down
            dp(r1, c1 + 1, r2),     // right, right
            dp(r1 + 1, c1, r2),     // down, right
            dp(r1, c1 + 1, r2 + 1)  // right, down
        );
        
        cherries += best;
        memo.set(key, cherries);
        return cherries;
    }
    
    const res = dp(0, 0, 0);
    return Math.max(0, res); // لو ما في مسار، لازم نرجع 0
};
