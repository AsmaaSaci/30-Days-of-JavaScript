var mincostToHireWorkers = function(quality, wage, k) {
    const workers = quality.map((q,i)=>[wage[i]/q,q]).sort((a,b)=>a[0]-b[0]);
    let res = Infinity, sumQ = 0;
    const heap = [];
    function push(x){
        let i = heap.length;
        heap.push(x);
        while(i>0){
            const p = Math.floor((i-1)/2);
            if(heap[p] >= heap[i]) break;
            [heap[p],heap[i]]=[heap[i],heap[p]];
            i=p;
        }
    }
    function pop(){
        const top = heap[0];
        const last = heap.pop();
        if(heap.length){
            heap[0]=last;
            let i=0;
            while(true){
                let l=2*i+1, r=2*i+2, largest=i;
                if(l<heap.length && heap[l]>heap[largest]) largest=l;
                if(r<heap.length && heap[r]>heap[largest]) largest=r;
                if(largest===i) break;
                [heap[i],heap[largest]]=[heap[largest],heap[i]];
                i=largest;
            }
        }
        return top;
    }
    for(let [ratio,q] of workers){
        sumQ+=q;
        push(q);
        if(heap.length>k) sumQ-=pop();
        if(heap.length===k) res=Math.min(res,sumQ*ratio);
    }
    return res;
};
