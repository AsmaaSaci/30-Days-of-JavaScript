/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function (targetGrid) {
  const n = targetGrid.length;
  const m = targetGrid[0].length;
  let map = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const color = targetGrid[i][j];
      if (!(color in map)) {
        map[color] = {
          top: i,
          left: j,
          down: i,
          right: j,
        };
      } else {
        map[color].top = Math.min(map[color].top, i);
        map[color].left = Math.min(map[color].left, j);
        map[color].down = Math.max(map[color].down, i);
        map[color].right = Math.max(map[color].right, j);
      }
    }
  }

  while (Object.keys(map).length > 0) {
    const next = {};
    for (const color in map) {
      if (!canPrint(map[color], color, targetGrid)) {
        next[color] = map[color];
      }
    }
    if (Object.keys(next).length === Object.keys(map).length) {
      return false;
    }
    map = next;
  }
  return true;
};

function canPrint(position, color, targetGrid) {
  const { top, left, down, right } = position;
  for (let i = top; i <= down; i++) {
    for (let j = left; j <= right; j++) {
      if (targetGrid[i][j] > 0 && targetGrid[i][j] !== Number(color)) {
        return false;
      }
    }
  }

  for (let i = top; i <= down; i++) {
    for (let j = left; j <= right; j++) {
      targetGrid[i][j] = 0;
    }
  }
  return true;
}
