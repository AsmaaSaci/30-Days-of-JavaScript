var palindromePairs = function(words) {
    let res = []
    let map = new Map()
    for (let i = 0; i < words.length; i++) map.set(words[i], i)

    function isPal(s, l, r) {
        while (l < r) {
            if (s[l++] !== s[r--]) return false
        }
        return true
    }

    for (let i = 0; i < words.length; i++) {
        let w = words[i]
        for (let j = 0; j <= w.length; j++) {
            let left = w.slice(0, j), right = w.slice(j)
            if (isPal(left, 0, left.length-1)) {
                let rev = right.split("").reverse().join("")
                if (map.has(rev) && map.get(rev) !== i) res.push([map.get(rev), i])
            }
            if (right.length > 0 && isPal(right, 0, right.length-1)) {
                let rev = left.split("").reverse().join("")
                if (map.has(rev) && map.get(rev) !== i) res.push([i, map.get(rev)])
            }
        }
    }
    return res
};
