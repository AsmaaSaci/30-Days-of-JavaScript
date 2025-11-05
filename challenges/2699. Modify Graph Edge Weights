/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  // create graph
  const graph = new Array(n).fill(null).map(() => new Array());
  for (let edge of edges) {
    const from = edge[0];
    const to = edge[1];
    const weight = edge[2];

    // skip edge with of weight EQUAL TO -1
    if (weight === -1) {
      continue;
    }

    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  const initialShortestDistance = dijkstra(n, graph, source, destination);
  
  // case 1: initialShortestDistance < target
  if (initialShortestDistance < target) {
    return [];
  }

  // case 2: initialShortestDistance == target
  if (initialShortestDistance === target) {
    for (let edge of edges) {
      const weight = edge[2];

      // change the negative number to large positive number
      if (weight === -1) {
        edge[2] = 2e9;
      }
    }
    return edges;
  }

  // case 3: initialShortestDistance > target
  for (let edge of edges) {
    const from = edge[0];
    const to = edge[1];
    const weight = edge[2];

    // skip edge with of weight NOT EQUAL TO -1
    if (weight !== -1) {
      continue;
    }

    // temporarily assigns weight 1
    edge[2] = 1;
    graph[from].push([to, 1]);
    graph[to].push([from, 1]);

    // recalculates shortest path
    const newShortestDistance = dijkstra(n, graph, source, destination);

    // check if target achieved
    if (newShortestDistance <= target) {
      edge[2] += target - newShortestDistance;

      for (let edge of edges) {
        const weight = edge[2];

        // change the negative number to large positive number
        if (weight === -1) {
          edge[2] = 2e9;
        }
      }
      return edges;
    }
  }

  return [];
};

function dijkstra(n, graph, source, destination) {
  const minDistance = new Array(n).fill(Infinity);
  minDistance[source] = 0;

  const heap = new MyPriorityQueue((a, b) => minDistance[a] < minDistance[b]);
  heap.push(source);

  while (!heap.isEmpty()) {
    const current = heap.pop();

    const neighbors = graph[current];
    for (let neighbor of neighbors) {
      const [target, weight] = neighbor;

      if (minDistance[current] + weight < minDistance[target]) {
        minDistance[target] = minDistance[current] + weight;
        heap.push(target);
      }
    }
  }

  return minDistance[destination];
}

class MyPriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2); // return idx
  }

  _leftChild(idx) {
    return 2 * idx + 1; // return idx
  }

  _rightChild(idx) {
    return 2 * idx + 2; // return idx
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const poppedValue = this._heap.pop();
    this._siftDown();

    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}
