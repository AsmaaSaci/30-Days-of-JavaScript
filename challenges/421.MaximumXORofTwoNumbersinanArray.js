let findMaximumXOR = function (nums) {
    let mask = 0, maxSeen = 0;
    const numBits = 30;

    for (let i = numBits; i >= 0; i--) {
        mask = mask | (1 << i);
        let prefixes = new Set();

        for (let num of nums) {
            const prefix = num & mask;
            prefixes.add(prefix);
        }

        const bestCaseXor = maxSeen | (1 << i);

        for (let prefix of prefixes) {
            const match = bestCaseXor ^ prefix;

            if (prefixes.has(match)) {
                maxSeen = bestCaseXor;
                break;
            }
        }
    }

    return maxSeen;
}
