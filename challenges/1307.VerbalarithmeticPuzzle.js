const pow10 = [1, 10, 100, 1000, 10000, 100000, 1000000];
let char, cnt, nonLeadingZero;
const isSolvable = (words, result) => {
    cnt = Array(91).fill(0);
    nonLeadingZero = Array(91).fill(false);
    let se = new Set();
    for (const w of words) {
        let wn = w.length;
        for (let i = 0; i < wn; i++) {
            let c = w[i], cidx = c.charCodeAt();
            if (i == 0 && wn > 1) nonLeadingZero[cidx] = true;
            se.add(c);
            cnt[cidx] += pow10[wn - i - 1];
        }
    }
    let rn = result.length;
    for (let i = 0; i < rn; i++) {
        let c = result[i], cidx = c.charCodeAt();
        if (i == 0 && rn > 1) nonLeadingZero[cidx] = true;
        se.add(c);
        cnt[cidx] -= pow10[rn - i - 1];
    }
    char = [...se];
    let used = Array(10).fill(0);
    return dfs(used, 0, 0);
};

const dfs = (used, step, diff) => {
    if (step == char.length) return diff == 0;
    for (let d = 0; d <= 9; d++) {
        let cidx = char[step].charCodeAt();
        if (!used[d] && (d > 0 || !nonLeadingZero[cidx])) {
            used[d] = true;
            if (dfs(used, step + 1, diff + cnt[cidx] * d)) return true;
            used[d] = false; // backtracking reset
        }
    }
    return false;
};
