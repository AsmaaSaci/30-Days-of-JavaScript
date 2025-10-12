/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    let x0 = 0, y0 = 0;
    let totalKeys = 0;

    // Step 1: we find start position and compute total key bitmask
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const cell = grid[i][j];
            if (cell === '@') {
                x0 = i;
                y0 = j;
            } else if (cell >= 'a' && cell <= 'f') {
                totalKeys |= 1 << (cell.charCodeAt(0) - 97);
            }
        }
    }

    const DIRS = [[0,1],[1,0],[0,-1],[-1,0]];
    const visited = new Set();
    const queue = [[x0, y0, 0, 0]]; // [x, y, keysBitmask, distance]
    visited.add(`${x0},${y0},0`);

    // Step 2: BFS traversal with key tracking
    while (queue.length) {
        const [x, y, keys, dist] = queue.shift();

        // If all keys collected, we return distance
        if (keys === totalKeys) return dist;

        for (const [dx, dy] of DIRS) {
            const nx = x + dx;
            const ny = y + dy;

            // we skip out-of-bounds or wall
            if (nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] === '#') continue;

            const cell = grid[nx][ny];
            let newKeys = keys;

            // If it's a key, we collect it
            if (cell >= 'a' && cell <= 'f') {
                newKeys |= 1 << (cell.charCodeAt(0) - 97);
            }

            // If it's a lock, we check if we have the key
            if (cell >= 'A' && cell <= 'F') {
                const requiredKey = 1 << (cell.charCodeAt(0) - 65);
                if ((newKeys & requiredKey) === 0) continue; // key not yet collected
            }

            const state = `${nx},${ny},${newKeys}`;
            if (!visited.has(state)) {
                visited.add(state);
                queue.push([nx, ny, newKeys, dist + 1]);
            }
        }
    }

    // If no path collects all keys
    return -1;
    
};
