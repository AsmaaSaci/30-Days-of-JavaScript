/**************************\U0001f60e**************************/
const maxValue = (e, k,
    n = e.sort(([a], [b]) => a - b).length, l,
    d = [...Array(k + 1)].map(() => new Uint32Array(n + 1)),
    $ = (l, r, v, m = l + r >> 1) => l < r ? e[m][0] > v ? $(l, m, v) : $(m + 1, r, v) : l
) => (
    e.forEach((x, j) => (
        j = n - j - 1,
        x = e[j][2],
        l = $(j + 1, n, e[j][1]),
        d.forEach((y, i) => i && (i = k - i, d[i][j] = Math.max(x + d[i + 1][l], d[i][j + 1])))
    )),
    d[0][0]
)
