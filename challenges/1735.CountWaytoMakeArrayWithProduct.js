function isPrime(x) {
    for (let i = 2, ub = Math.sqrt(x); i <= ub; i++) 
        if (x % i === 0)
            return false
    
    return true
}

const ub = 1 + 1e4
// useful primes
const primes = []
for (let i = 2; i < ub; i++) {
    if (isPrime(i))
        primes.push(i)
}

const modMe = 1e9 + 7, ModMe = BigInt(modMe)

// build the combination number table
const C = [[1]]
function getC(n, k) {
    const lastRowIdx = C.length - 1
    for (let i = 1 + lastRowIdx; i <= n; i++) {
        const row = C[i] = new Array(i + 1)
        const prev = C[i - 1]
        for (let j = 0; j <= i; j++) {
            row[j] = ((prev[j - 1] ?? 0) + (prev[j] ?? 0)) % modMe
        }
    }
    
    return C[n][k]
}
/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var waysToFillArray = function(queries) {
    return queries.map(([n, k]) => {
        let outcome = 1n
        // there are `nM` clapboards and `k` balls
        const nM = n - 1
        for (const prime of primes) {
            if (k < prime)  break

            let count = 0
            for (; k % prime === 0; k /= prime) {
                count++
            }
            outcome = (outcome * BigInt(getC(nM + count, count))) % ModMe
        }

        outcome = Number(outcome)
        return outcome
    })
};
