var medianSlidingWindow = function(nums, k) {
    const result = [];
    const getMedian = (arr) => {
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
    };
    let window = nums.slice(0, k).sort((a,b)=>a-b);
    result.push(getMedian(window));
    for (let i = k; i < nums.length; i++) {
        let idx = window.indexOf(nums[i - k]);
        window.splice(idx, 1);
        let insertPos = 0;
        while (insertPos < window.length && window[insertPos] < nums[i]) insertPos++;
        window.splice(insertPos, 0, nums[i]);
        result.push(getMedian(window));
    }
    return result;
};
