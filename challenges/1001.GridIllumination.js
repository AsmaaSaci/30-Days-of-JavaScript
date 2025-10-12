/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    let rows={},cols={},diagolan={},antidiagonal={},lampCordinateMap={},row,col,dx=[],ans=[];
    
    for(let i=0;i<lamps.length;i++){
        row = lamps[i][0];
        col = lamps[i][1];
        if(lampCordinateMap[row+"_"+col]===undefined){
            illuminate(rows,cols,diagolan,antidiagonal,row,col);
            lampCordinateMap[row+"_"+col]=true;
        }
    }
    
    for(let q=0;q<queries.length;q++){
        row = queries[q][0];
        col = queries[q][1];
        if(isIlluminated(rows,cols,diagolan,antidiagonal,row,col)){//Lamp will be turned on only once, even if the same lamp is listed twice
            ans.push(1);
        }else{
            ans.push(0);
        }
        //Traverse 8 adjacent lamps
        for(let i=row-1;i<=row+1;i++){
            for(let j=col-1;j<=col+1;j++){
                if(i>=0 && i<=n-1 && j>=0 && j<=n-1){
                    if(lampCordinateMap[i+"_"+j]===true){
                        ternoff(rows,cols,diagolan,antidiagonal,i,j);
                        delete lampCordinateMap[i+"_"+j];
                    }
                }
            }
        }
    }
    return ans;
    
    function isIlluminated(rows,cols,diagolan,antidiagonal,i,j){
        if(rows[i]>0 || cols[j]>0  || diagolan[getDiagolanCord(i,j)]>0  || antidiagonal[getAntiDiagolanCord(i,j)]>0 ){
            return true;
        }
        return false;
    }
    
    function illuminate(rows,cols,diagolan,antidiagonal,i,j){
        if(rows[i]===undefined){
            rows[i]=1;
        }else{
            rows[i]++;
        }
        if(cols[j]===undefined){
            cols[j]=1;
        }else{
            cols[j]++;
        }
        let cordinate = getDiagolanCord(i,j);
        if(diagolan[cordinate]===undefined){
            diagolan[cordinate]=1;
        }else{
            diagolan[cordinate]++;
        }
        cordinate =getAntiDiagolanCord(i,j);
        if(antidiagonal[cordinate]===undefined){
            antidiagonal[cordinate]=1;
        }else{
            antidiagonal[cordinate]++;
        }
    }
    
    function ternoff(rows,cols,diagolan,antidiagonal,i,j){
        if(rows[i]===undefined){
            rows[i]=0;
        }else{
            rows[i]--;
        }
        if(cols[j]===undefined){
            cols[j]=0;
        }else{
            cols[j]--;
        }
        let cordinate = getDiagolanCord(i,j);
        if(diagolan[cordinate]===undefined){
            diagolan[cordinate]=0;
        }else{
            diagolan[cordinate]--;
        }
        cordinate =getAntiDiagolanCord(i,j);
        if(antidiagonal[cordinate]===undefined){
            antidiagonal[cordinate]=0;
        }else{
            antidiagonal[cordinate]--;
        }
    }
    
    function getAntiDiagolanCord(i,j){
        /*
        These will go 0 to 2*(n-1).
        Minimum value(top left) when i=0 and j=0, its 0+0=0
        Maximum value(bottom right) when i=n-1 and j=n-1, its (n-1)+(n-1)
        */
        return i+j;
    }
    
    function getDiagolanCord(i,j){
        /*
        These will go 0 to 2*(n-1).
        Minimum value(top right) when i=0 and j=n-1, its (0-(n-1))+(n-1)=0
        Maximum value(bottom left) when i=n-1 and j=0, its ((n-1)-0)+(n-1)
        We can also take (j-1)+(n-1) it won't effect the solution. Its acually the differece of 2 cords + (n-1)
        */
        return (i-j)+(n-1);
        /****NOTE it can also be (j-i)+(n-1), its just difference of i and j goes from -(n-1) to (n-1)*/
    }
};
