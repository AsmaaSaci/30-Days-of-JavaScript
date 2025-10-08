/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const MOD = BigInt(1e9 + 7);
function powerMod(base, exp) {
    let result = BigInt(1);
    base = BigInt(base);
    exp = BigInt(exp);
    
    while (exp > 0) {
        if (exp % BigInt(2) === BigInt(1)) {
            result = (result * base) % MOD;
        }
        base = (base * base) % MOD;
        exp = exp / BigInt(2);
    }
    
    return result;
}

var getFinalState = function(nums, k, multiplier) {
    if (multiplier === 1) return nums;
    let n = nums.length;
    
    const heap = new MinPriorityQueue({ compare: (a, b) => 
        a[0] - b[0] || a[1] - b[1]
    })
    
    for (let i = 0; i < n; i++) {
        heap.enqueue([BigInt(nums[i]), i])
    }
    
    let counts = new Map();
    
    while (counts.size < n && k > 0) {
        let [x, y] = heap.dequeue();
        x *= BigInt(multiplier);
        
        heap.enqueue([x, y])
        counts.set(y, (counts.get(y) || 0) + 1);
        k--;
    }

    let exp = Math.floor(k / n);
    let rem = k % n;

    const res = new Array(n).fill(0);
    while (!heap.isEmpty()) {
        const [num, pos] = heap.dequeue();
        const mul = powerMod(multiplier, exp + (rem > 0 ? 1 : 0));
        res[pos] = Number(((num % MOD) * (mul % MOD)) % MOD);
        rem--;
    }

    return res;

};
