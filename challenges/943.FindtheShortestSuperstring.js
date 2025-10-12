/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const shortestSuperstring = (A) => {
	function additionalStr(a,b){ // a + b additional Str
		for (let i=0; i<a.length; i++){
			if (b.startsWith(a.slice(i))){
				return b.slice(a.length-i);
			}
		}
		return b;
	}
	// dp[i][j] -> min str building j state ending word i
	let dp = new Array(A.length).fill()
		.map(() => new Array(1 << A.length).fill(A.join('')));

	for (let s=1; s<(1<<A.length); s++){
		for (let j=0; j<A.length; j++){
			if (!(s & (1 << j))) continue;
			if (s===(1<<j)) dp[j][s]=A[j];
			let prevS = s ^ (1 << j);
			for (let k=0; k<A.length; k++){
				if (prevS & (1 << k)){
					let curStr = dp[k][prevS];
					let tempStr = curStr + additionalStr(curStr, A[j]);
					if (tempStr.length < dp[j][s].length){
						dp[j][s] = tempStr;
					}
				}
			}
		}
	}
	let min = Number.MAX_VALUE;
	let minStr = null;
	for (let i=0; i<A.length; i++){
		let cur = dp[i][(1<<(A.length))-1];
		if (cur.length < min){
			min = cur.length;
			minStr = cur;
		}
	}
	return minStr;
}
