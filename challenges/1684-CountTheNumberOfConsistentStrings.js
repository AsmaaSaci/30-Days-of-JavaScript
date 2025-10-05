var countConsistentStrings = function(allowed, words) {
  const set = new Set(allowed);
  let count = 0;
  for (let word of words) {
    let ok = true;
    for (let ch of word) {
      if (!set.has(ch)) {
        ok = false;
        break;
      }
    }
    if (ok) count++;
  }
  return count;
};
