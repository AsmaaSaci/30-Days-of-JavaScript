var minStickers = function(stickers, target) {
    const m = stickers.length;
    const stickerCounts = stickers.map(st => {
        const count = Array(26).fill(0);
        for (let c of st) count[c.charCodeAt(0) - 97]++;
        return count;
    });
    const memo = new Map();
    const dp = (remain) => {
        if (remain.length === 0) return 0;
        if (memo.has(remain)) return memo.get(remain);
        const count = Array(26).fill(0);
        for (let c of remain) count[c.charCodeAt(0) - 97]++;
        let ans = Infinity;
        for (let sc of stickerCounts) {
            if (sc[remain[0].charCodeAt(0) - 97] === 0) continue;
            const newRemain = [];
            for (let i = 0; i < 26; i++) {
                if (count[i] > 0) {
                    for (let k = 0; k < Math.max(0, count[i] - sc[i]); k++) {
                        newRemain.push(String.fromCharCode(97 + i));
                    }
                }
            }
            const next = dp(newRemain.join(''));
            if (next !== -1) ans = Math.min(ans, 1 + next);
        }
        memo.set(remain, ans === Infinity ? -1 : ans);
        return memo.get(remain);
    };
    return dp(target);
};
