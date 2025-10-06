var runningSum = function(nums) {
    let res = []
    let sum = 0
    for (let n of nums) {
        sum += n
        res.push(sum)
    }
    return res
};
