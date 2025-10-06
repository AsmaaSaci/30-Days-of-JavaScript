var countSmaller = function(nums) {
    let n = nums.length
    let res = new Array(n).fill(0)
    let arr = nums.map((v,i)=>[v,i])

    function mergeSort(l,r) {
        if (r-l <= 1) return
        let m = Math.floor((l+r)/2)
        mergeSort(l,m)
        mergeSort(m,r)
        let i=l,j=m,temp=[]
        while (i<m || j<r) {
            if (j==r || (i<m && arr[i][0] <= arr[j][0])) {
                res[arr[i][1]] += j-m
                temp.push(arr[i++])
            } else {
                temp.push(arr[j++])
            }
        }
        for (let k=l;k<r;k++) arr[k]=temp[k-l]
    }

    mergeSort(0,n)
    return res
};
