const sm = (a) => a.reduce(((x, y) => x + y), 0);
let a, n, tsum;

const splitArraySameAverage = (A) => {
    a = A, n = a.length, tsum = sm(a);
    a.sort((x, y) => x - y);
    let ok = false;
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            ok = true;
            break;
        }
    }
    if (!ok) return false;
    for (let i = 1; i * 2 <= n; i++) {
        if (tsum * i % n == 0) {
            if (dfs(0, i, tsum * i / n)) return true;
        }
    }
    return false;
};

const dfs = (startIdx, cnt, cur) => {
    if (cnt == 0) return cur == 0;
    if (a[startIdx] * cnt > cur) return false;
    for (let i = startIdx; i < n - cnt + 1; i++) {
        if (i > startIdx && a[i] == a[i - 1]) continue;
        if (dfs(i + 1, cnt - 1, cur - a[i])) return true;
    }
    return false;
};
