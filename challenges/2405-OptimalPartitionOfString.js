var partitionString = function(s) {
    let set = new Set();
    let count = 1;
    for (let c of s) {
        if (set.has(c)) {
            count++;
            set.clear();
        }
        set.add(c);
    }
    return count;
};
