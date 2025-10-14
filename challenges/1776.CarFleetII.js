var getCollisionTimes = function(cars) {
    var queue = [];
    var n = cars.length;
    queue.unshift(n-1);
    var time = new Array(n).fill(-1); 
    for(var i = n-2; i>=0; i--)
    {
        // case1: poll out cars that never collides with current car
        while(queue.length>0 && cars[i][1]<= cars[queue[0]][1])
        {
            queue.shift();
        }
        
        // case2: cur car will collide with lator cars in queue
        while(queue.length>0)
        {
            var next = queue[0];
            time[i] = (cars[next][0] - cars[i][0] ) / (cars[i][1] - cars[next][1]);
            time[i].toFixed(5);
            if(time[next] != -1 && time[i] >= time[next])
            {
                queue.shift();
            }
            else
            {
                break;
            }
        }
        queue.unshift(i);
    }
    return time;
};
