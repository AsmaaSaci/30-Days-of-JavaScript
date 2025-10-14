/**************************\U0001f60e**************************/
function minimumEffort(tasks) {
    let n = tasks.length;
    tasks.sort((a, b) => a[0] - a[1] + b[1] - b[0]);
    let needEnergy = -Infinity;
    let used = 0;
    let cost, need;
    for (let i = 0; i < n; i++) {
        [cost, need] = tasks[i];
        needEnergy = Math.max(needEnergy, used + need);
        used += cost;
    }
    return needEnergy;
};
