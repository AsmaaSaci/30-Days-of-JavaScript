const maxProduct = (words) => {
    const n = words.length;
    const masks = words.map(w => {
        let m = 0;
        for (let c of w) m |= 1 << (c.charCodeAt(0) - 97);
        return m;
    });

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
}
