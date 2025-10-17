/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const memo = new Map();

    function helper(currRobot, currFact, usedCapacity) {
        if (currRobot === robot.length) return 0;
        if (currFact === factory.length) return Number.MAX_SAFE_INTEGER;

        const key = `${currRobot},${currFact},${usedCapacity}`;
        if (memo.has(key)) return memo.get(key);

        let minDist = Number.MAX_SAFE_INTEGER;

        // Option 1: Skip to next factory
        minDist = helper(currRobot, currFact + 1, 0);

        // Option 2: Use current factory if capacity allows
        const [position, capacity] = factory[currFact];
        if (usedCapacity < capacity) {
            const dist = Math.abs(robot[currRobot] - position);
            minDist = Math.min(
                minDist,
                dist + helper(currRobot + 1, currFact, usedCapacity + 1)
            );
        }

        memo.set(key, minDist);
        return minDist;
    }

    return helper(0, 0, 0);
};
