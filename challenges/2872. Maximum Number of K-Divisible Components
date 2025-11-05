/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    // Step 1: Build the adjacency list representation of the tree
    const tree = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        tree[a].push(b);
        tree[b].push(a);
    }

    // Step 2: Perform DFS to calculate subtree sums
    const subtreeSum = Array(n).fill(0);
    const visited = Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        let sum = values[node];

        for (const neighbor of tree[node]) {
            if (!visited[neighbor]) {
                sum += dfs(neighbor);
            }
        }

        subtreeSum[node] = sum;
        return sum;
    }

    // Perform DFS from the root (node 0)
    dfs(0);

    // Step 3: Check for valid splits
    let maxComponents = 1; // At least one component (the whole tree)

    function dfsCount(node) {
        visited[node] = true;
        let componentCount = 0;

        for (const neighbor of tree[node]) {
            if (!visited[neighbor]) {
                if (subtreeSum[neighbor] % k === 0) {
                    componentCount++; // Split here
                }
                componentCount += dfsCount(neighbor);
            }
        }

        return componentCount;
    }

    // Reset visited array and count components
    visited.fill(false);
    maxComponents += dfsCount(0);

    return maxComponents;
};
