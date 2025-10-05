var rob = function(root) {
  function dfs(node) {
    if (!node) return [0, 0];
    const left = dfs(node.left);
    const right = dfs(node.right);
    const robNode = node.val + left[1] + right[1];
    const notRobNode = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [robNode, notRobNode];
  }
  const res = dfs(root);
  return Math.max(res[0], res[1]);
};
