function SegmentTreeRQ(m, A, n) {
    let h = Math.ceil(Math.log2(n));
    const MAX = 2 * 2 ** h - 1;
    let tree = Array(MAX).fill(-1);
    let a = [...A];
    build(1, 0, n - 1);
    return {query}
    function build(vi, tl, tr) {
        if (tl == tr) {
            tree[vi] = a[tl];
            return;
        }
        let mid = getMid(tl, tr);
        build(vi * 2, tl, mid);
        build(vi * 2 + 1, mid + 1, tr);
        if (tree[vi * 2] != -1 && get_occurrence(tree[vi * 2], tl, tr) * 2 > tr - tl + 1) {
            tree[vi] = tree[vi * 2];
        } else if (tree[vi * 2 + 1] != -1 && get_occurrence(tree[vi * 2 + 1], tl, tr) * 2 > tr - tl + 1) {
            tree[vi] = tree[vi * 2 + 1];
        }
    }

    function query(vi, l, r, tl, tr) {
        if (l > tr || r < tl) {
            return {
                first: -1,
                second: -1
            };
        }
        if (tl <= l && r <= tr) {
            if (tree[vi] == -1) return {
                first: -1,
                second: -1
            };
            let occ = get_occurrence(tree[vi], tl, tr);
            if (occ * 2 > tr - tl + 1) {
                return {
                    first: tree[vi],
                    second: occ
                };
            } else {
                return {
                    first: -1,
                    second: -1
                };
            }
        }
        let mid = getMid(l, r);
        let resL = query(vi * 2, l, mid, tl, tr);
        if (resL.first > -1) return resL;
        let resR = query(vi * 2 + 1, mid + 1, r, tl, tr);
        if (resR.first > -1) return resR;
        return {
            first: -1,
            second: -1
        };
    }

    function get_occurrence(num, l, r) {
        if (!m.has(num)) return 0;
        let a = m.get(num);
        let lbv = lower_bound(a, l);
        if (lbv == a.length) return 0;
        let ubv = upper_bound(a, r);
        return ubv - lbv;
    }

    function lower_bound(a, t) {
        let low = 0;
        let n = a.length;
        let high = n - 1;
        while (low < high) {
            let mid = getMid(low, high);
            if (a[mid] < t) {
                low = mid + 1;
            } else if (a[mid] > t) {
                high = mid;
            } else {
                return mid;
            }
        }
        return high;
    }
    
    function upper_bound(a, t) { 
        let n = a.length;
        for (let i = 0; i < n; i++) {
            if (a[i] > t) return i;
        }
        return n;
    }

    function getMid(low, high) {
        return low + (high - low >> 1);
    }
}

function MajorityChecker(a) {
    let m = new Map();
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(a[i])) m.set(a[i], []);
        m.get(a[i]).push(i);
    }
    let st = new SegmentTreeRQ(m, a, n);
    return {
        query
    }

    function query(left, right, threshold) {
        let res = st.query(1, 0, n - 1, left, right);
        if (res.second >= threshold) {
            return res.first;
        }
        return -1;
    }
}
