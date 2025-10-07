/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    // خريطة stop -> list of buses
    const stopToBuses = new Map();
    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToBuses.has(stop)) stopToBuses.set(stop, []);
            stopToBuses.get(stop).push(i);
        }
    }

    if (!stopToBuses.has(source) || !stopToBuses.has(target)) return -1;

    const visitedStops = new Set([source]);
    const visitedBuses = new Set();
    const queue = [[source, 0]]; // [stop, busesTaken]

    while (queue.length) {
        const [stop, busesTaken] = queue.shift();
        if (stop === target) return busesTaken;

        for (const bus of stopToBuses.get(stop) || []) {
            if (visitedBuses.has(bus)) continue;
            visitedBuses.add(bus);
            // push all stops from this bus
            for (const nextStop of routes[bus]) {
                if (!visitedStops.has(nextStop)) {
                    visitedStops.add(nextStop);
                    queue.push([nextStop, busesTaken + 1]);
                }
            }
        }
    }

    return -1;
};
