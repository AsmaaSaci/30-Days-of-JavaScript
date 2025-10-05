var deleteAndEarn = function(nums) {
    let count = {};
    for (let num of nums) count[num] = (count[num] || 0) + num;
    let keys = Object.keys(count).map(Number).sort((a, b) => a - b);
    let prev = 0, curr = 0, prevKey = -1;
    for (let key of keys) {
        let temp = curr;
        if (key === prevKey + 1) {
            curr = Math.max(curr, prev + count[key]);
        } else {
            curr = curr + count[key];
        }
        prev = temp;
        prevKey = key;
    }
    return curr;
};
