var RandomizedCollection = function() {
    this.nums = []
    this.idx = new Map()
};

RandomizedCollection.prototype.insert = function(val) {
    let exists = this.idx.has(val) && this.idx.get(val).size > 0
    if (!this.idx.has(val)) this.idx.set(val, new Set())
    this.idx.get(val).add(this.nums.length)
    this.nums.push(val)
    return !exists
};

RandomizedCollection.prototype.remove = function(val) {
    if (!this.idx.has(val) || this.idx.get(val).size === 0) return false
    let i = this.idx.get(val).values().next().value
    this.idx.get(val).delete(i)
    let last = this.nums[this.nums.length - 1]
    this.nums[i] = last
    this.idx.get(last).add(i)
    this.idx.get(last).delete(this.nums.length - 1)
    this.nums.pop()
    if (this.idx.has(val) && this.idx.get(val).size === 0) this.idx.delete(val)
    return true
};

RandomizedCollection.prototype.getRandom = function() {
    return this.nums[Math.floor(Math.random() * this.nums.length)]
};
