var minOperations = function(nums, k) {
  let heap = nums.sort((a, b) => a - b);
  let ops = 0;
  while (heap.length > 1 && heap[0] < k) {
    let x = heap.shift();
    let y = heap.shift();
    let z = x * 2 + y;
    insert(heap, z);
    ops++;
  }
  return heap[0] < k ? -1 : ops;
};

function insert(arr, val) {
  let i = arr.findIndex(x => x > val);
  if (i === -1) arr.push(val);
  else arr.splice(i, 0, val);
}
