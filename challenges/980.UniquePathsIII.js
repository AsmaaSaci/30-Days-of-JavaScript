/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let result = 0;

    let rows = grid.length;
    let columns = grid[0].length;

    let startR, startC, endR, endC, emptyCount = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(grid[i][j] === 1) {
                startR = i;
                startC = j;
            } else if (grid[i][j] === 2) {
                endR = i;
                endC = j;
            } else if(grid[i][j] === 0) {
                emptyCount++;
            }
        }
    }

    var dfs = (row, col, remaining) => {
        if(row < 0 || row >= rows ||
            col < 0 || col >= columns || 
            grid[row][col] === -1) {
                return;
            }

        if(row === endR && col === endC) {
            if(remaining === 0) {
                result++;
            }
            
            return;
        }

        let temp = grid[row][col];
        grid[row][col] = -1;

        remaining--;

        dfs(row + 1, col, remaining);
        dfs(row - 1, col, remaining);
        dfs(row, col + 1, remaining);
        dfs(row, col - 1, remaining);

        grid[row][col] = temp;
        remaining++;

        return;
    };

    dfs(startR, startC, emptyCount + 1);

    return result;
};
