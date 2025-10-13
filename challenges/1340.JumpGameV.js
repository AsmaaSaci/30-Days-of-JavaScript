let maxJumps = function (arr, d) {
    let hash = {};

    function jump(idx) {
        if (idx in hash) return hash[idx];
        let max = 0;

        for (let i = 1; i <= d; i++) {
            let fw = idx + i;
            if (fw < arr.length && arr[idx] > arr[fw]) max = Math.max(max, jump(fw));
            else break;
        }

        for (let j = 1; j <= d; j++) {
            let bk = idx - j;
            if (bk >= 0 && arr[idx] > arr[bk]) max = Math.max(max, jump(bk));
            else break;
        }

        return hash[idx] = max + 1;
    }

    let output = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        output = Math.max(output, jump(idx));
    }

    return output;
}
