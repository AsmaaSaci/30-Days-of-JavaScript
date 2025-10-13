let minFlips = function (mat) {
    const R = mat.length, C = mat[0].length, RMinus1 = R - 1, CMinus1 = C - 1;

    function toKey(grid) {
        const buf = grid.flat(2)
        const str = buf.join('')
        return parseInt(str, 2)
    }

    function flip(grid, i, j) {
        const matrix = grid.map(row => [...row]);

        matrix[i][j] = 1 - matrix[i][j];

        if (i > 0) {
            matrix[i - 1][j] = 1 - matrix[i - 1][j];
        }

        if (i < RMinus1) {
            matrix[i + 1][j] = 1 - matrix[i + 1][j];
        }

        if (j > 0) {
            matrix[i][j - 1] = 1 - matrix[i][j - 1];
        }

        if (j < CMinus1) {
            matrix[i][j + 1] = 1 - matrix[i][j + 1];
        }

        return matrix
    }

    const seen = [];
    const firstKey = toKey(mat);

    if (firstKey === 0) {
        return 0;
    }

    seen[firstKey] = true;


    const queue = [[mat, 0]];

    for (let sf = 0; sf < queue.length; sf++) {
        const [matrix, layer] = queue[sf];
        const layerPlus1 = 1 + layer;

        for (const [i, row] of mat.entries()) {
            for (const j of row.keys()) {
                const next = flip(matrix, i, j);
                const key = toKey(next);

                if (key === 0) {
                    return layerPlus1;
                }

                if (!seen[key]) {
                    seen[key] = true;
                    queue.push([next, layerPlus1]);
                }
            }
        }
    }

    return -1
}
