var threeEqualParts = function(arr) {
    const n = arr.length;
    let ones = arr.reduce((a,b)=>a+b,0);
    if(ones === 0) return [0, n-1];
    if(ones % 3 !== 0) return [-1, -1];
    const k = ones/3;
    let first=-1, second=-1, third=-1, count=0;
    for(let i=0;i<n;i++){
        if(arr[i]===1){
            count++;
            if(count===1) first=i;
            else if(count===k+1) second=i;
            else if(count===2*k+1) third=i;
        }
    }
    while(third<n && arr[first]===arr[second] && arr[second]===arr[third]){
        first++; second++; third++;
    }
    if(third===n) return [first-1, second];
    return [-1,-1];
};
