/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    let id = 2;
    const area = {};
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    
    function dfs(r,c,id){
        if(r<0||c<0||r>=n||c>=n||grid[r][c]!==1) return 0;
        grid[r][c] = id;
        let res = 1;
        for(const [dr,dc] of dirs){
            res += dfs(r+dr,c+dc,id);
        }
        return res;
    }
    
    let maxArea = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                const size = dfs(i,j,id);
                area[id] = size;
                maxArea = Math.max(maxArea,size);
                id++;
            }
        }
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===0){
                const seen = new Set();
                let newArea = 1;
                for(const [dr,dc] of dirs){
                    const nr=i+dr, nc=j+dc;
                    if(nr>=0&&nc>=0&&nr<n&&nc<n&&grid[nr][nc]>1&&!seen.has(grid[nr][nc])){
                        newArea+=area[grid[nr][nc]];
                        seen.add(grid[nr][nc]);
                    }
                }
                maxArea = Math.max(maxArea,newArea);
            }
        }
    }
    
    return maxArea;
};
