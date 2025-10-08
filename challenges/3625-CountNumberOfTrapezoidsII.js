function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function countTrapezoids(points) {
    const n = points.length;

    const slopeToPairs = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const dy = points[j][1] - points[i][1];
            const dx = points[j][0] - points[i][0];
            let slope;

            if (dx === 0) {
                slope = { x: Number.MAX_SAFE_INTEGER, y: 1 };
            }

            else if (dy === 0) {
                slope = { x: 0, y: 1 };
            }

            else {
                const commonDivisor = gcd(Math.abs(dy), Math.abs(dx));
                let newDy = dy / commonDivisor;
                let newDx = dx / commonDivisor;

                if (newDx < 0) {
                    newDx = -newDx;
                    newDy = -newDy;
                }

                slope = { x: newDy, y: newDx };
            }

            const slopeKey = `${slope.x},${slope.y}`;

            if (!slopeToPairs.has(slopeKey)) {
                slopeToPairs.set(slopeKey, []);
            }

            slopeToPairs.get(slopeKey).push([i, j]);
        }
    }

    let N = 0;

    for (const pairs of slopeToPairs.values()) {
        const k = pairs.length;

        if (k < 2) continue;

        const totalPairsForSlope = (k * (k - 1)) / 2;
        let sharedEndpointPairs = 0;
        const pointFreq = new Map();

        for (const [a, b] of pairs) {
            pointFreq.set(a, (pointFreq.get(a) || 0) + 1);
            pointFreq.set(b, (pointFreq.get(b) || 0) + 1);
        }

        for (const freq of pointFreq.values()) {
            sharedEndpointPairs += (freq * (freq - 1)) / 2;
        }

        N += totalPairsForSlope - sharedEndpointPairs;
    }

    let P_total = 0;
    const midpointCounts = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const midSum = {
                x: points[i][0] + points[j][0],
                y: points[i][1] + points[j][1],
            };

            const midKey = `${midSum.x},${midSum.y}`;
            midpointCounts.set(midKey, (midpointCounts.get(midKey) || 0) + 1);
        }
    }

    for (const count of midpointCounts.values()) {
        P_total += (count * (count - 1)) / 2;
    }

    const lines = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let [x1, y1] = points[i];
            let [x2, y2] = points[j];

            let a = y2 - y1;
            let b = x1 - x2;
            let c = -a * x1 - b * y1;

            const commonDivisor = gcd(Math.abs(a), gcd(Math.abs(b), Math.abs(c)));
            a /= commonDivisor;
            b /= commonDivisor;
            c /= commonDivisor;

            if (a < 0 || (a === 0 && b < 0)) {
                a = -a;
                b = -b;
                c = -c;
            }

            const lineKey = `${a},${b},${c}`;

            if (!lines.has(lineKey)) {
                lines.set(lineKey, new Set());
            }

            lines.get(lineKey).add(i);
            lines.get(lineKey).add(j);
        }
    }

    let CQ = 0;
    let P_degenerate = 0;

    for (const pointIndicesSet of lines.values()) {
        const m = pointIndicesSet.size;

        if (m < 4) continue;

        CQ += (m * (m - 1) * (m - 2) * (m - 3)) / 24;

        const pointIndices = Array.from(pointIndicesSet);
        const lineMidpointCounts = new Map();

        for (let k = 0; k < m; k++) {
            for (let l = k + 1; l < m; l++) {
                const p1 = pointIndices[k];
                const p2 = pointIndices[l];
                const midSum = {
                    x: points[p1][0] + points[p2][0],
                    y: points[p1][1] + points[p2][1],
                };

                const midKey = `${midSum.x},${midSum.y}`;
                lineMidpointCounts.set(midKey, (lineMidpointCounts.get(midKey) || 0) + 1);
            }
        }

        for (const count of lineMidpointCounts.values()) {
            P_degenerate += (count * (count - 1)) / 2;
        }
    }

    return N - P_total - 3 * CQ + P_degenerate;
}
