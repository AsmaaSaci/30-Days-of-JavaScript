var slidingPuzzle = function(board) {
    const target = "123450";
    const start = board.flat().join("");
    const neighbors = {
        0:[1,3],
        1:[0,2,4],
        2:[1,5],
        3:[0,4],
        4:[1,3,5],
        5:[2,4]
    };
    const queue = [[start, start.indexOf("0"), 0]];
    const seen = new Set([start]);
    while(queue.length){
        const [state, zero, step] = queue.shift();
        if(state===target) return step;
        for(let nei of neighbors[zero]){
            const arr = state.split("");
            [arr[zero], arr[nei]] = [arr[nei], arr[zero]];
            const newState = arr.join("");
            if(!seen.has(newState)){
                seen.add(newState);
                queue.push([newState, nei, step+1]);
            }
        }
    }
    return -1;
};
