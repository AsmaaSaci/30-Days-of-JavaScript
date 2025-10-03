var isRobotBounded = function(instructions) {
    let x = 0, y = 0, dir = 0;
    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    for (let move of instructions) {
        if (move === "G") {
            x += dx[dir];
            y += dy[dir];
        } else if (move === "L") {
            dir = (dir + 3) % 4;
        } else if (move === "R") {
            dir = (dir + 1) % 4;
        }
    }
    return (x === 0 && y === 0) || dir !== 0;
};
