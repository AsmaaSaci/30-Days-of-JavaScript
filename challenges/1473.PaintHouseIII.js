////////////////// JAVASCRIPT
var minCost = function(houses, cost, m, n, target) {
    const cache = {};
    const backtrack = (prevColor, house, numNeighborhoods) => {
        // return if we have too many neighborhoods
        if (numNeighborhoods > target) return Infinity;

        // if we have painted all the houses
        // return 0 if we have the correct number of neighborhoods
        // otherwise return maximum value
        if (house === m) {
            return numNeighborhoods === target ? 0 : Infinity;
        }

        // if we have already seen this combination, return the result
        const key = [prevColor, house, numNeighborhoods].join('-')
        if (cache.hasOwnProperty(key)) return cache[key];


        // case if house is already painted
        if (houses[house]) {
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            return cache[key] = backtrack(houses[house], house + 1, numNeighborhoods + additionalNeighborhoods);
        }

        let min = Infinity;
        for (let color = 0; color < n; color++) {
            // paint the house this color (offset by 1)
            houses[house] = color + 1;
            // see if we have a new neighborhood
            const additionalNeighborhoods = houses[house] !== prevColor ? 1 : 0;
            // find the minimum price to paint all other houses with this combination
            const res = backtrack(houses[house], house + 1, numNeighborhoods + additionalNeighborhoods);
            // price to pain the house this color
            const price = cost[house][color];
            min = Math.min(min, price + res);
            // remove the paint
            houses[house] = 0;
        }
        return cache[key] = min;
    }

    // Backtrack through all the different possibilities
    // if the result is max value, return -1;
    const result = backtrack(-1, 0, 0);
    return result === Infinity ? -1 : result;
};
