/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const size = nums.length
    // val, list's idx
    const items = []
    for (const [i, numList] of nums.entries()) {
        for (const val of new Set(numList)) {
            items.push([val, i])
        }
    }

    const len = items.length
    // sort items by val asc
    items.sort((A, B) => A[0] - B[0])


    const minVal = items[0][0], maxVal = items.at(-1)[0]
    let bestWidth = maxVal - minVal,
        bestOutcome = [minVal, maxVal]
    
    const idx2freq = new Array(size).fill(0)
    let mapSize = 0
    // use the 'worm method' to determine the best width along with its range
    for (let low = 0, high = 0; high < len; high++) {
        const addMe = items[high][1]
        idx2freq[addMe]++
        if (idx2freq[addMe] === 1)
            mapSize++

        for (; low <= high && mapSize === size; low++) {
            const lowVal = items[low][0], highVal = items[high][0]
            const width = highVal - lowVal
            if (width < bestWidth) {
                bestWidth = width
                bestOutcome = [lowVal, highVal]
            }

            const deleteMe = items[low][1]
            idx2freq[deleteMe]--
            if (idx2freq[deleteMe] === 0)
                mapSize--
        }
    }


    return bestOutcome
};
