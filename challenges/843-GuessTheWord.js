var findSecretWord = function(words, master) {
    function match(a, b) {
        let c = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) c++;
        }
        return c;
    }
    let candidates = words;
    for (let i = 0; i < 10; i++) {
        let guessWord = candidates[Math.floor(Math.random() * candidates.length)];
        let matches = master.guess(guessWord);
        if (matches === 6) return;
        candidates = candidates.filter(w => match(w, guessWord) === matches);
    }
};
