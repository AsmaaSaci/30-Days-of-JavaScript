var cutOffTree = function(forest) {
    const m = forest.length, n = forest[0].length;
    const trees = [];
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (forest[i][j] > 1) trees.push([forest[i][j],i,j]);
        }
    }
    trees.sort((a,b)=>a[0]-b[0]);

    const bfs = (sx,sy,tx,ty) => {
        if (sx===tx && sy===ty) return 0;
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        const visited = Array.from({length:m},()=>Array(n).fill(false));
        const q=[[sx,sy,0]];
        visited[sx][sy]=true;
        while(q.length){
            const [x,y,d]=q.shift();
            for(const [dx,dy] of dirs){
                const nx=x+dx, ny=y+dy;
                if(nx>=0&&ny>=0&&nx<m&&ny<n&&!visited[nx][ny]&&forest[nx][ny]!==0){
                    if(nx===tx && ny===ty) return d+1;
                    visited[nx][ny]=true;
                    q.push([nx,ny,d+1]);
                }
            }
        }
        return -1;
    };

    let cx=0, cy=0, total=0;
    for(const [_,tx,ty] of trees){
        const dist=bfs(cx,cy,tx,ty);
        if(dist===-1) return -1;
        total+=dist;
        cx=tx; cy=ty;
    }
    return total;
};
