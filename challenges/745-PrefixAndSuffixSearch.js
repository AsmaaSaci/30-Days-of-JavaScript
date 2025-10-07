/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.map = new Map();
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        const n = w.length;
        // كل توليفة prefix و suffix
        for (let p = 0; p <= n; p++) {
            const pref = w.substring(0, p);
            for (let s = 0; s <= n; s++) {
                const suff = w.substring(n - s);
                // نخزن مع index الحالي
                this.map.set(pref + '#' + suff, i);
            }
        }
    }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    const key = pref + '#' + suff;
    return this.map.has(key) ? this.map.get(key) : -1;
};

/** 
 * Usage:
 * var obj = new WordFilter(["apple"]);
 * console.log(obj.f("a", "e")); // 0
 * console.log(obj.f("b", ""));  // -1
 */
