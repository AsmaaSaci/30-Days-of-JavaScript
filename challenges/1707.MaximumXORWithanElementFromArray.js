const maximizeXor = (N, Q) => {                          // TL;DR:
    N.sort((a,b) => a - b)                               // Sort N to enable binary search
    for (let i = 0, x, lim; i < Q.length; i++) {         // Iterate through the queries
        [[x, lim], Q[i]] = [Q[i], -1]                    // Extract query params and replace with default result of -1,
        if (lim < N[0]) continue                         //    then skip to the next query if no usable values below lim
        let l = 0, r = find(N, 0, N.length, lim+1) - 1   // Set the initial index range
        for (let j = ~~Math.log2(N[r]); ~j; j--)         // Check bits backwards from largest possible
            if ((N[l] & 1 << j) !== (N[r] & 1 << j)) {   // Skip if all options have the same value in the current bit
                let mid = find(N, l, r, N[r] >> j << j)  // Find the midpoint index where the bit flips from 0 to 1
                if (x & 1 << j) r = mid - 1              // If the current bit of x is a 1, choose the left side of mid
                else l = mid                             //    with 0s, otherwise take the right side of mid with 1s
            }
		Q[i] = x ^ N[l]                                  // Update Q with the result, overwriting the default -1
    }
    return Q                                             // Return the fully-updated Q
}

const find = (N, l, r, target) => {                      // Binary search function, finding target in N between l and r
    while (l <= r) {
        let m = l + r >> 1                               // Find the midpoint; equivalent of Math.floor((l + r) / 2)
        if (N[m] < target) l = m + 1                     // If the midpoint is not high enough, move l up
        else r = m - 1                                   // Otherwise, move r back
    }
    return l                                             // Return the index that matches (or is the closest >) target
}
