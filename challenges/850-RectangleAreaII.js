var rectangleArea = function(rectangles) {
    const MOD = 1000000007n;
    let events = [];
    let ys = new Set();
    for (let [x1,y1,x2,y2] of rectangles) {
        events.push([x1,y1,y2,1]);
        events.push([x2,y1,y2,-1]);
        ys.add(y1);
        ys.add(y2);
    }
    ys = Array.from(ys).sort((a,b)=>a-b);
    const yIndex = new Map();
    for (let i=0;i<ys.length;i++) yIndex.set(ys[i],i);
    const count = Array(ys.length*4).fill(0);
    const length = Array(ys.length*4).fill(0n);

    function update(node,l,r,ql,qr,val){
        if(ql>=r || qr<=l) return;
        if(ql<=l && r<=qr){
            count[node]+=val;
        } else {
            let mid=(l+r)>>1;
            update(node*2,l,mid,ql,qr,val);
            update(node*2+1,mid,r,ql,qr,val);
        }
        if(count[node]>0){
            length[node]=BigInt(ys[r]-ys[l]);
        } else {
            if(l+1>=r) length[node]=0n;
            else length[node]=length[node*2]+length[node*2+1];
        }
    }

    events.sort((a,b)=>a[0]-b[0]);
    let prevX=events[0][0];
    let ans=0n;
    for(let [x,y1,y2,type] of events){
        ans = (ans + BigInt(x-prevX)*length[1])%MOD;
        update(1,0,ys.length-1,yIndex.get(y1),yIndex.get(y2),type);
        prevX=x;
    }
    return Number(ans);
};
