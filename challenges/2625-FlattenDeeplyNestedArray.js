var flat = function (arr, n) {
    if (n === 0) return arr;
    const res = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            res.push(...flat(item, n - 1));
        } else {
            res.push(item);
        }
    }
    return res;
};
