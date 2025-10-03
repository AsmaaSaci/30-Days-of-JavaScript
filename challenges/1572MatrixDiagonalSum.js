var diagonalSum = function(mat) {
    let sum = 0, n = mat.length;
    for (let i = 0; i < n; i++) {
        sum += mat[i][i] + mat[i][n - 1 - i];
    }
    if (n % 2 === 1) sum -= mat[Math.floor(n/2)][Math.floor(n/2)];
    return sum;
};
