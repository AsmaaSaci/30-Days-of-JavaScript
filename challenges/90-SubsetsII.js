/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (arr) {
    let result = [];
    arr.sort();
    let backtrack = (path, start) => {
        result.push([...path]);
        for (let i = start; i < arr.length; i++) {
            if (i > start && arr[i] === arr[i - 1]){
                continue;
            }
            path.push(arr[i]);
            backtrack(path, i + 1);
            path.pop();

        }
    }
    backtrack([], 0);
    return result;
};
