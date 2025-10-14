/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const R = grid.length, C = grid[0].length,
        RM = R - 1, CM = C - 1
    function countIslands(matrix) {
        let nextColor = 2
        const set = new Set()
        function dye(i, j) {
            if (matrix[i][j] !== 1)   return

            matrix[i][j] = nextColor
            set.add(nextColor)

            if (i > 0)  dye(i - 1, j)
            if (i < RM) dye(i + 1, j)
            if (j > 0)  dye(i, j - 1)
            if (j < CM) dye(i, j + 1)
        }

        for (const [i, row] of matrix.entries()) {
            for (const j of row.keys()) {
                dye(i, j)
                nextColor++
            }
        }

        return set.size
    }


    const initCount = countIslands(structuredClone(grid))
    if (initCount !== 1)    return 0


    for (const [i, row] of grid.entries()) {
        for (const [j, val] of row.entries()) {
            if (val === 1) {
                const matrix = structuredClone(grid)
                matrix[i][j] = 0
                const count = countIslands(matrix)
                if (count !== 1)    return 1
            }
        }
    }


    return 2
};
