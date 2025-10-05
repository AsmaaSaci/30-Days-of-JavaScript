var generateTrees = function(n) {
  if (n === 0) return [];
  
  function build(start, end) {
    const res = [];
    if (start > end) return [null];
    for (let i = start; i <= end; i++) {
      const leftTrees = build(start, i - 1);
      const rightTrees = build(i + 1, end);
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    return res;
  }
  
  return build(1, n);
};
