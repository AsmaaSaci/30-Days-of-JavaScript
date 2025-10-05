var longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length;
  const res = new Array(n);
  const tail = [];
  function upperBound(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  }
  for (let i = 0; i < n; i++) {
    const idx = upperBound(tail, obstacles[i]);
    if (idx === tail.length) tail.push(obstacles[i]);
    else tail[idx] = obstacles[i];
    res[i] = idx + 1;
  }
  return res;
};
