var countPrimes = function(n) {
    if (n < 2) return 0;

    const sieve = new Array(n).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j < n; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.filter(Boolean).length;
};
