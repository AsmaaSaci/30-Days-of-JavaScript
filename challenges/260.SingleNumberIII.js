var singleNumber = function(nums) {
    let x = 0;
    for (let num of nums) {
        x ^= num;
    }
    let y = x & -x;
    let a = 0, b = 0;
    for (let num of nums) {
        if (num & y) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    return [a, b];
};
