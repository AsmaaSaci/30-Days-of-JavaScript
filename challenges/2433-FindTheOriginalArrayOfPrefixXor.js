var findArray = function(pref) {
  const n = pref.length;
  const res = new Array(n);
  res[0] = pref[0];
  for (let i = 1; i < n; i++) {
    res[i] = pref[i] ^ pref[i - 1];
  }
  return res;
};
