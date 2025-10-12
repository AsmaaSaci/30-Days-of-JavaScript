var countTriplets = function (a) {
	const max = Math.max(...a);

	const pairAndResultArr = new Array(max + 1).fill(0);
	for (const e of a) {
		for (const e2 of a) {
			pairAndResultArr[e & e2]++;
		}
	}

	let sum = 0;
	for (let andResult = 0; andResult <= max; andResult++) {
		for (const e of a) {
			if ((andResult & e) === 0) {
				sum += pairAndResultArr[andResult];
			}
		}
	}
	return sum;
};
