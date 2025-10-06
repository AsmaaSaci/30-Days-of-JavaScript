var trapRainWater = function(heightMap) {
    let m = heightMap.length, n = heightMap[0].length
    let visited = Array.from({length: m}, () => Array(n).fill(false))
    let heap = []
    function push(x,y,h) {
        heap.push([h,x,y])
        let i = heap.length - 1
        while (i > 0) {
            let p = Math.floor((i-1)/2)
            if (heap[p][0] <= heap[i][0]) break
            ;[heap[p],heap[i]] = [heap[i],heap[p]]
            i = p
        }
    }
    function pop() {
        let top = heap[0], last = heap.pop()
        if (heap.length > 0) {
            heap[0] = last
            let i = 0
            while (true) {
                let l = i*2+1, r = i*2+2, s = i
                if (l < heap.length && heap[l][0] < heap[s][0]) s = l
                if (r < heap.length && heap[r][0] < heap[s][0]) s = r
                if (s === i) break
                ;[heap[i],heap[s]] = [heap[s],heap[i]]
                i = s
            }
        }
        return top
    }
    for (let i = 0; i < m; i++) {
        push(i,0,heightMap[i][0])
        push(i,n-1,heightMap[i][n-1])
        visited[i][0] = visited[i][n-1] = true
    }
    for (let j = 1; j < n-1; j++) {
        push(0,j,heightMap[0][j])
        push(m-1,j,heightMap[m-1][j])
        visited[0][j] = visited[m-1][j] = true
    }
    let res = 0, dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    while (heap.length) {
        let [h,x,y] = pop()
        for (let [dx,dy] of dirs) {
            let nx = x+dx, ny = y+dy
            if (nx<0||nx>=m||ny<0||ny>=n||visited[nx][ny]) continue
            visited[nx][ny] = true
            res += Math.max(0,h - heightMap[nx][ny])
            push(nx,ny,Math.max(h,heightMap[nx][ny]))
        }
    }
    return res
};
