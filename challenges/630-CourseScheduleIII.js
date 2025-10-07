var scheduleCourse = function(courses) {
    courses.sort((a,b)=>a[1]-b[1]);
    const heap = [];
    let time = 0;

    function push(x){
        let i=heap.length;
        heap.push(x);
        while(i>0){
            let p=Math.floor((i-1)/2);
            if(heap[p]>=heap[i]) break;
            [heap[p],heap[i]]=[heap[i],heap[p]];
            i=p;
        }
    }

    function pop(){
        const top=heap[0];
        const last=heap.pop();
        if(heap.length){
            heap[0]=last;
            let i=0;
            while(true){
                let l=2*i+1,r=2*i+2,largest=i;
                if(l<heap.length && heap[l]>heap[largest]) largest=l;
                if(r<heap.length && heap[r]>heap[largest]) largest=r;
                if(largest===i) break;
                [heap[i],heap[largest]]=[heap[largest],heap[i]];
                i=largest;
            }
        }
        return top;
    }

    for(let [d,e] of courses){
        time+=d;
        push(d);
        if(time>e) time-=pop();
    }
    return heap.length;
};
