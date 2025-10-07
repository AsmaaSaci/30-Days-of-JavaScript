var maxChunksToSorted = function(arr) {
    const sorted = arr.slice().sort((a,b)=>a-b);
    const cnt = new Map();
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i], b = sorted[i];
        let v = (cnt.get(a) || 0) + 1;
        if (v === 0) cnt.delete(a); else cnt.set(a, v);
        v = (cnt.get(b) || 0) - 1;
        if (v === 0) cnt.delete(b); else cnt.set(b, v);
        if (cnt.size === 0) res++;
    }
    return res;
};
