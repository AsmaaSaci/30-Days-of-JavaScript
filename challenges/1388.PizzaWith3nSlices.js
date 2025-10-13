/**************************\U0001f60e**************************/
function maxSizeSlices(slices) {
    const numSlices = slices.length / 3;
    const len = slices.length - 1;

    const dp = new Array(len).fill(null).map(() => new Array(numSlices + 1).fill(0));
    const getMaxTotalSlices = (pieces) => {
        dp[0][1] = pieces[0];

        dp[1][1] = Math.max(pieces[0], pieces[1]);
        let max = dp[1][1];

        for (let i = 2; i < pieces.length; i++) {
            for (let numPieces = 1; numPieces <= numSlices; numPieces++) {
                dp[i][numPieces] = Math.max(dp[i - 1][numPieces],
                    dp[i - 2][numPieces - 1] + pieces[i]);
                if (max < dp[i][numPieces]) max = dp[i][numPieces];
            }
        }
        return max;
    }

    return Math.max(getMaxTotalSlices(slices.slice(0, slices.length - 1)),
        getMaxTotalSlices(slices.slice(1)));
};
