/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
    const MOD = 10**9 + 7;
        const n = hats.length;
    const memo = new Map();

    function backtrack(mask, hat) {
        if (mask === (1 << n) - 1) {
            return 1; // All people have chosen hats
        }

        if (hat > 40) {
            return 0; // No more hats to choose
        }

        const state = `${mask}-${hat}`;
        if (memo.has(state)) {
            return memo.get(state);
        }

        let ways = backtrack(mask, hat + 1); // Skip the current hat

        for (let person = 0; person < n; person++) {
            if ((mask & (1 << person)) === 0 && hats[person].includes(hat)) {
                ways += backtrack(mask | (1 << person), hat + 1);
                ways %= MOD;
            }
        }

        memo.set(state, ways);
        return ways;
    }

    return backtrack(0, 1);
};
