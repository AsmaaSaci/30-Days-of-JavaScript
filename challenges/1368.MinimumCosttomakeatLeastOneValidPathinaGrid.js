const minCost = (grid) => {
    const queue = [[0, 0]];
    const directions = [[0, 1, 1], [0, -1, 2], [1, 0, 3], [-1, 0, 4]];
    const bfs = grid.map(r => r.map(_ => Infinity));
    bfs[0][0] = 0;
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (const [dx, dy, v] of directions) {
            const [cX, cY] = [x + dx, y + dy];
            if (grid[cX]?.[cY]) {
                const newCost = bfs[x][y] + (grid[x][y] !== v);
                if (newCost < bfs[cX][cY]) {
                    bfs[cX][cY] = newCost;
                    queue.push([cX, cY]);
                }
            }
        }
    }

    return bfs.at(-1).at(-1);
}
