/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
        function findPeakElement(){
            let left = 0, right = mountainArr.length()-1;
            while(left <= right){
                let mid = Math.floor((left + right) / 2);
                if(left == right){
                    return left;
                }else if(mountainArr.get(mid) > mountainArr.get(mid+1)){
                    right = mid;
                }else{
                    left = mid + 1;
                }
            }
        }

        function bsLeft(left, right){
            while(left <= right){
                let mid = Math.floor((left + right) / 2);
                if(mountainArr.get(mid) == target){
                    return mid;
                }else if(mountainArr.get(mid) > target) {
                    right  = mid - 1;
                }else{
                    left = mid + 1;
                }
            }
            return -1;
        }
        function bsRight(left, right){
            while(left <= right){
                let mid = Math.floor((left + right) / 2);
                if(mountainArr.get(mid) == target){
                    return mid;
                }else if(mountainArr.get(mid) > target) {
                    left = mid + 1;
                }else{
                    right  = mid - 1; 
                }
            }
            return -1;
        }

        const peak = findPeakElement();
        const leftSearch = bsLeft(0, peak);
        if(leftSearch != -1) return leftSearch;
        return bsRight(peak + 1, (mountainArr.length()) - 1);
    
};
