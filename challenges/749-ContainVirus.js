/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function(isInfected) {
    const m = isInfected.length, n = isInfected[0].length;
    let res = 0;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    while (true) {
        const regions = [], frontiers = [], walls = [];
        const seen = Array.from({length:m},()=>Array(n).fill(false));

        for (let i=0;i<m;i++) {
            for (let j=0;j<n;j++) {
                if (isInfected[i][j]===1 && !seen[i][j]) {
                    const q=[[i,j]], region=[], frontier=new Set();
                    let wall=0; seen[i][j]=true;
                    while (q.length) {
                        const [r,c]=q.pop(); region.push([r,c]);
                        for (const [dr,dc] of dirs) {
                            const nr=r+dr,nc=c+dc;
                            if (nr<0||nr>=m||nc<0||nc>=n) continue;
                            if (isInfected[nr][nc]===1 && !seen[nr][nc]) {
                                seen[nr][nc]=true; q.push([nr,nc]);
                            } else if (isInfected[nr][nc]===0) {
                                frontier.add(nr+","+nc);
                                wall++;
                            }
                        }
                    }
                    regions.push(region);
                    frontiers.push(frontier);
                    walls.push(wall);
                }
            }
        }

        if (!regions.length) break;

        let idx=0, maxSize=0;
        for (let i=0;i<frontiers.length;i++) {
            if (frontiers[i].size>maxSize) {
                maxSize=frontiers[i].size; idx=i;
            }
        }

        res+=walls[idx];
        for (let i=0;i<regions.length;i++) {
            if (i===idx) {
                for (const [r,c] of regions[i]) isInfected[r][c]=2;
            } else {
                for (const cell of frontiers[i]) {
                    const [r,c]=cell.split(",").map(Number);
                    isInfected[r][c]=1;
                }
            }
        }

        if (maxSize===0) break;
    }

    return res;
};
