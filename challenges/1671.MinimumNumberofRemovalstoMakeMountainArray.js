function minimumMountainRemovals(nums) {
    const n = nums.length;

    if (n < 3) {
        return 0; // Cannot form a mountain array with less than 3 elements
    }

    // Step 1: Calculate LIS from the left
    const lis = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    // Step 2: Calculate LDS from the right
    const lds = new Array(n).fill(1);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }

    // Step 3: Calculate the maximum length of the mountain array
    let maxMountainLength = 0;
    for (let i = 1; i < n - 1; i++) { // Peak must be between 0 and n-1
        if (lis[i] > 1 && lds[i] > 1) { // Ensure both sides of the peak have elements
            maxMountainLength = Math.max(maxMountainLength, lis[i] + lds[i] - 1);
        }
    }

    // Step 4: Calculate minimum removals
    return n - maxMountainLength;
}

// Example usage:
console.log(minimumMountainRemovals([1, 3, 1])); // Output: 0
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])); // Output: 3
