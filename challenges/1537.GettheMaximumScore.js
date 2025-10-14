/**************************\U0001f60e**************************/
function maxSum(a, b) {
    let al = a.length;
    let bl = b.length;
    let sa = 0;
    let sb = 0;
    let i = 0;
    let j = 0;
    let ans = 0;
    while (i < al && j < bl) {
        if (a[i] < b[j]) {
            sa += a[i++];
        } else if (a[i] > b[j]) {
            sb += b[j++];
        } else {
            ans += Math.max(sa, sb) + a[i];
            sa = 0;
            sb = 0;
            i++;
            j++;
        }
    }
    while (i < al) {
        sa += a[i++];
    }
    while (j < bl) {
        sb += b[j++];
    }
    ans += Math.max(sa, sb);
    return ans % 1000000007;
};
