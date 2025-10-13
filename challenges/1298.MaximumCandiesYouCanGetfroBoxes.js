/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
        let n = status.length;
    let visited = Array(n).fill(false);
    let hasKey = Array(n).fill(false);
    let queue = [...initialBoxes];
    let available = new Set(queue);
    let result = 0;

    while (queue.length > 0) {
        let i = queue.shift();
        
        if (visited[i] || (!hasKey[i] && status[i] === 0)) {
            continue;
        }

        visited[i] = true;
        result += candies[i];

        for (let key of keys[i]) {
            hasKey[key] = true;
            if (available.has(key)) {
                queue.push(key);
            }
        }

        for (let newBox of containedBoxes[i]) {
            available.add(newBox);
            if (hasKey[newBox] || status[newBox] === 1) {
                queue.push(newBox);
            }
        }
    }

    return result;
};
