var findItinerary = function(tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (let k in graph) graph[k].sort().reverse();
    let res = [];
    function dfs(node) {
        let dest = graph[node];
        while (dest && dest.length > 0) {
            dfs(dest.pop());
        }
        res.push(node);
    }
    dfs("JFK");
    return res.reverse();
};
