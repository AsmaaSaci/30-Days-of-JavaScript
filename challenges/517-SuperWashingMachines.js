var findMinMoves = function(machines) {
    let total = machines.reduce((a,b)=>a+b,0);
    if (total % machines.length !== 0) return -1;
    let avg = total / machines.length, res = 0, sum = 0;
    for (let m of machines) {
        let diff = m - avg;
        sum += diff;
        res = Math.max(res, Math.max(Math.abs(sum), diff));
    }
    return res;
};
