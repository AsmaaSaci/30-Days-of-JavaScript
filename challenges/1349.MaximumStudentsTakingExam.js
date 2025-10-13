//////////////////////// Template /////////////////////////////////
function HungarianBipartiteGraph(g) {
    let vis = new Set(), n = g.length, match = Array(n).fill(-1);
    return { maxMatch }
    function maxMatch() {
        let res = 0;
        for (let i = 0; i < n; i++) {
            vis.clear();
            res += dfs(i);
        }
        return res;
    }
    function dfs(cur) {
        for (const child of g[cur]) {
            if (vis.has(child)) continue;
            vis.add(child);
            if (match[child] < 0 || dfs(match[child])) {
                match[child] = cur;
                return true;
            }
        }
        return false;
    }
}
////////////////////////////////////////////////////////////////

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const maxStudents = (seats) => {
    let n = seats.length, m = seats[0].length, cnt = 0, g = initializeGraph(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (seats[i][j] == '.') {
                cnt++;
                let x = i * m + j, y;
                for (let k = -1; k <= 1; k++) {
                    if (i + k >= 0 && i + k < n && j - 1 >= 0 && seats[i + k][j - 1] == '.') {
                        y = (i + k) * m + (j - 1);
                        g[x].push(y);
                    }
                    if (i + k >= 0 && i + k < n && j + 1 < m && seats[i + k][j + 1] == '.') {
                        y = (i + k) * m + (j + 1);
                        g[x].push(y);
                    }
                }
            }
        }
    }
    let hun = HungarianBipartiteGraph(g), conflict = hun.maxMatch();
    return cnt - conflict / 2;
}
