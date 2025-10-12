let wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);

    let sorted = nums.slice();
    let mid = Math.floor((nums.length + 1) / 2);
    let j = mid - 1;
    let k = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) nums[i] = sorted[j--];
        else nums[i] = sorted[k--];
    }
}
