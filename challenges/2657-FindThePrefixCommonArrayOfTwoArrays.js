var findThePrefixCommonArray = function(A, B) {
    let n = A.length
    let res = new Array(n).fill(0)
    let seen = new Set()
    let count = 0
    for (let i = 0; i < n; i++) {
        if (seen.has(A[i])) count++
        else seen.add(A[i])
        if (seen.has(B[i])) count++
        else seen.add(B[i])
        res[i] = count
    }
    return res
};
