var Solution = function(rects) {
    this.rects = rects;
    this.prefixSum = [];
    let sum = 0;
    for (let rect of rects) {
        sum += (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
        this.prefixSum.push(sum);
    }
};

Solution.prototype.pick = function() {
    let target = Math.floor(Math.random() * this.prefixSum[this.prefixSum.length - 1]);
    let left = 0, right = this.prefixSum.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.prefixSum[mid] <= target) left = mid + 1;
        else right = mid;
    }
    let rect = this.rects[left];
    let x = rect[0] + Math.floor(Math.random() * (rect[2] - rect[0] + 1));
    let y = rect[1] + Math.floor(Math.random() * (rect[3] - rect[1] + 1));
    return [x, y];
};
