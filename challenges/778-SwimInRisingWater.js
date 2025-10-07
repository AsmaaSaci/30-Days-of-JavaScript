/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = Array.from({length:n}, ()=>Array(n).fill(false));

    class MinHeap {
        constructor() { this.arr = []; }
        push(item) {
            this.arr.push(item);
            this._bubbleUp();
        }
        pop() {
            if (this.arr.length === 1) return this.arr.pop();
            const top = this.arr[0];
            this.arr[0] = this.arr.pop();
            this._bubbleDown();
            return top;
        }
        _bubbleUp() {
            let i = this.arr.length - 1;
            while (i > 0) {
                let p = Math.floor((i-1)/2);
                if (this.arr[i][0] >= this.arr[p][0]) break;
                [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
                i = p;
            }
        }
        _bubbleDown() {
            let i = 0, n = this.arr.length;
            while (true) {
                let l = i*2+1, r = i*2+2, s = i;
                if (l<n && this.arr[l][0] < this.arr[s][0]) s = l;
                if (r<n && this.arr[r][0] < this.arr[s][0]) s = r;
                if (s === i) break;
                [this.arr[i], this.arr[s]] = [this.arr[s], this.arr[i]];
                i = s;
            }
        }
        isEmpty() { return this.arr.length === 0; }
    }

    const heap = new MinHeap();
    heap.push([grid[0][0], 0, 0]); // [time, row, col]
    visited[0][0] = true;

    while (!heap.isEmpty()) {
        const [t, r, c] = heap.pop();
        if (r === n-1 && c === n-1) return t;
        for (const [dr,dc] of dirs) {
            const nr = r+dr, nc = c+dc;
            if (nr>=0 && nr<n && nc>=0 && nc<n && !visited[nr][nc]) {
                visited[nr][nc] = true;
                heap.push([Math.max(t, grid[nr][nc]), nr, nc]);
            }
        }
    }
    return -1;
};
