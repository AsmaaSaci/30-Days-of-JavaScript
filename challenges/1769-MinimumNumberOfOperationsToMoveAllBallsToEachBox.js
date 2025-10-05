var minOperations = function(boxes) {
  const n = boxes.length;
  const res = new Array(n).fill(0);
  let count = 0, ops = 0;
  for (let i = 0; i < n; i++) {
    res[i] += ops;
    if (boxes[i] === '1') count++;
    ops += count;
  }
  count = 0;
  ops = 0;
  for (let i = n - 1; i >= 0; i--) {
    res[i] += ops;
    if (boxes[i] === '1') count++;
    ops += count;
  }
  return res;
};
