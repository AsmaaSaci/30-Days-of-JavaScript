var findAllConcatenatedWordsInADict = function(words) {
    let wordSet = new Set(words), memo = new Map();
    const canForm = (word) => {
        if (memo.has(word)) return memo.get(word);
        for (let i = 1; i < word.length; i++) {
            let left = word.slice(0, i), right = word.slice(i);
            if (wordSet.has(left) && (wordSet.has(right) || canForm(right))) {
                memo.set(word, true);
                return true;
            }
        }
        memo.set(word, false);
        return false;
    };
    return words.filter(word => word.length > 0 && canForm(word));
};
