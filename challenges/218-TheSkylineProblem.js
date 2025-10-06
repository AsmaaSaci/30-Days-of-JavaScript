/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    let events = []
    for (let [l, r, h] of buildings) {
        events.push([l, -h, r]) 
        events.push([r, 0, 0])  
    }
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1])

    class MaxHeap {
        constructor() {
            this.data = []
        }
        push(val) {
            this.data.push(val)
            this._siftUp(this.data.length - 1)
        }
        pop() {
            if (this.size() === 0) return null
            this._swap(0, this.data.length - 1)
            let out = this.data.pop()
            this._siftDown(0)
            return out
        }
        top() {
            return this.data.length ? this.data[0] : null
        }
        size() {
            return this.data.length
        }
        _siftUp(i) {
            while (i > 0) {
                let p = (i - 1) >> 1
                if (this.data[p][0] >= this.data[i][0]) break
                this._swap(i, p)
                i = p
            }
        }
        _siftDown(i) {
            let n = this.data.length
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2, largest = i
                if (l < n && this.data[l][0] > this.data[largest][0]) largest = l
                if (r < n && this.data[r][0] > this.data[largest][0]) largest = r
                if (largest === i) break
                this._swap(i, largest)
                i = largest
            }
        }
        _swap(i, j) {
            [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
        }
    }

    let heap = new MaxHeap()
    heap.push([0, Infinity])
    let res = [], i = 0

    while (i < events.length) {
        let x = events[i][0]
        while (i < events.length && events[i][0] === x) {
            let [_, h, r] = events[i]
            if (h < 0) {
                heap.push([-h, r])
            }
            i++
        }
        while (heap.size() && heap.top()[1] <= x) heap.pop()
        let currH = heap.top()[0]
        if (!res.length || res[res.length - 1][1] !== currH) {
            res.push([x, currH])
        }
    }
    return res
};
