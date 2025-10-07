var numSimilarGroups = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    const parent = Array.from({length:n},(_,i)=>i);

    const find = x => parent[x]===x ? x : (parent[x]=find(parent[x]));
    const union = (a,b) => {
        a=find(a); b=find(b);
        if(a!==b) parent[b]=a;
    };

    function isSimilar(a,b){
        let diff=0;
        for(let i=0;i<m;i++){
            if(a[i]!==b[i]){
                diff++;
                if(diff>2) return false;
            }
        }
        return diff===0 || diff===2;
    }

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(isSimilar(strs[i],strs[j])) union(i,j);
        }
    }

    const groups=new Set();
    for(let i=0;i<n;i++) groups.add(find(i));
    return groups.size;
};
