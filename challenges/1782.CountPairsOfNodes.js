function countPairs(n, edges, queries) {
	const degree = new Array(n).fill(0);
	const edgeCountMap = new Map();
	for (const [u, v] of edges) {
		degree[u - 1]++;
		degree[v - 1]++;
		const pairUniqueKey = Math.min(u - 1, v - 1) * n + Math.max(u - 1, v - 1);
		edgeCountMap.set(pairUniqueKey, (edgeCountMap.get(pairUniqueKey) || 0) + 1);
	}
	const sortedDegreeCounts = [...degree].sort((a, b) => a - b);
	const findIndex = (array, target, left) => {
		let right = array.length;
		while (left < right) {
			const mid = (left + right) >> 1;
			if (array[mid] > target) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}
		return left;
	};
	const results = [];
	for (const threshold of queries) {
		let validPairCount = 0;
		for (let i = 0; i < sortedDegreeCounts.length; ++i) {
			const searchResult = findIndex(sortedDegreeCounts, threshold - sortedDegreeCounts[i], i + 1);
			validPairCount += n - searchResult;
		}
		for (const [pairUniqueKey, directEdgeCount] of edgeCountMap) {
			const u = Math.floor(pairUniqueKey / n);
			const v = pairUniqueKey % n;
			if (degree[u] + degree[v] > threshold && degree[u] + degree[v] - directEdgeCount <= threshold) {
				--validPairCount;
			}
		}
		results.push(validPairCount);
	}
	return results;
}
