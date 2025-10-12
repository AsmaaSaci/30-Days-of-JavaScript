let nthSuperUglyNumber = function (n, primes) {
    const ugly = new Array(n).fill(1);
    const idx = new Array(primes.length).fill(0);
    const val = primes.slice();

    for (let i = 1; i < n; i++) {
        const minVal = Math.min(...val);
        ugly[i] = minVal;

        for (let j = 0; j < primes.length; j++) {
            if (val[j] === minVal) {
                idx[j]++;
                val[j] = ugly[idx[j]] * primes[j];
            }
        }
    }

    return ugly[n - 1];
}
