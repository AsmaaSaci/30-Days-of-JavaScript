/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(matrix) { 

    if(matrix.length === 1) return matrix[0][0];

    let minFst = 0, minSnd = 0, fstPos = -1;
    
    for(let i = 0; i < matrix.length; i++) {

        let nextFst = Infinity, nextSnd = Infinity, nextPos = -1;

        for(let j = 0; j < matrix[0].length; j++) {

            const val = matrix[i][j] + (j === fstPos ? minSnd : minFst);

            if(nextFst >= val) {
                nextSnd = nextFst;
                nextFst = val;
                nextPos = j;
            } else if(nextSnd > val) {
                nextSnd = val;
            }
        }

        minFst = nextFst;
        minSnd = nextSnd;
        fstPos = nextPos;
    }
    
    return minFst;
};
