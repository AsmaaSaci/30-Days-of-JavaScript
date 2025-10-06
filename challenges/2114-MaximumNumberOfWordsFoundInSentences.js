var mostWordsFound = function(sentences) {
    let max = 0
    for (let s of sentences) {
        let count = s.split(" ").length
        if (count > max) max = count
    }
    return max
};
