var reversePairs = function(nums) {
    let count = 0;
    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        let j = 0;
        for (let i = 0; i < left.length; i++) {
            while (j < right.length && left[i] > 2 * right[j]) j++;
            count += j;
        }
        let merged = [], i = 0, k = 0;
        while (i < left.length && k < right.length) {
            if (left[i] <= right[k]) merged.push(left[i++]);
            else merged.push(right[k++]);
        }
        while (i < left.length) merged.push(left[i++]);
        while (k < right.length) merged.push(right[k++]);
        return merged;
    };
    mergeSort(nums);
    return count;
};
