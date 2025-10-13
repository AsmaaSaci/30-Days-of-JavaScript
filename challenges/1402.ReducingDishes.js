/**************************\U0001f60e**************************/
function maxSatisfaction(satisfaction) {
    if (satisfaction.length > 1) {
        let readyArr = satisfaction
            .sort((a, b) => b - a)
            .reverse()
        let result
        let currIterValue
        for (let i = 1; i <= satisfaction.length; i++) {
            result = readyArr
                .reduce((acc, curr, index) => {
                    return acc + (curr * (index + 1))
                })
            readyArr.shift()
            currIterValue = readyArr.reduce((acc, curr, index) => {
                return acc + (curr * (index + 1))
            })
            if (currIterValue > result) {
                result = currIterValue
            } else break
        }
        return Math.max(0, result)
    } else return 0
};
