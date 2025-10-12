/**************************\U0001f60e**************************/
const minRefuelStops = (target, startFuel, stations) => {
    let curr = startFuel;
    let len = stations.length;
    stations.sort(function(x,y) {return x[0] - y[0]});
    let pq = new Array();
    let i = 0, count = 0;
    while (curr < target) {
        count++;
        while (i < len && stations[i][0] <= curr) {
            pq.push(stations[i][1]);
            i++;
        }
        if (!pq.length)
            break;
        let max = Math.max(...pq);
        curr += max;
        pq.splice(pq.indexOf(max), 1);
    }
    return curr >= target ? count : -1;
};
