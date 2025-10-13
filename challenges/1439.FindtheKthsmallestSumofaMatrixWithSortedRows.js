/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    const m = mat.length;

    // we merge two sorted arrays and keep only the k smallest sums
    const merge = (list1, list2) => {
        const heap = [];
        const visited = new Set();
        const result = [];

        heap.push([list1[0] + list2[0], 0, 0]);
        visited.add(`0,0`);

        while (result.length < k && heap.length > 0) {
            heap.sort((a, b) => a[0] - b[0]); // we simulate min-heap
            const [sum, i, j] = heap.shift();
            result.push(sum);

            if (i + 1 < list1.length && !visited.has(`${i + 1},${j}`)) {
                heap.push([list1[i + 1] + list2[j], i + 1, j]);
                visited.add(`${i + 1},${j}`);
            }

            if (j + 1 < list2.length && !visited.has(`${i},${j + 1}`)) {
                heap.push([list1[i] + list2[j + 1], i, j + 1]);
                visited.add(`${i},${j + 1}`);
            }
        }

        return result;
    };

    let current = mat[0];
    for (let i = 1; i < m; i++) {
        current = merge(current, mat[i]);
    }

    return current[k - 1];
};
