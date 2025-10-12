/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    this.n = nums.length;
    this.tree = new Array(this.n * 2);
    for (let i = 0; i < this.n; i++) {
        this.tree[i + this.n] = nums[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
        this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
    let i = index + this.n;
    this.tree[i] = val;
    while (i > 1) {
        i = Math.floor(i / 2);
        this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
    let l = left + this.n, r = right + this.n;
    let sum = 0;
    while (l <= r) {
        if (l % 2 === 1) sum += this.tree[l++];
        if (r % 2 === 0) sum += this.tree[r--];
        l = Math.floor(l / 2);
        r = Math.floor(r / 2);
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
