/**
 * @param {number[][]} darts
 * @param {number} r
 * @return {number}
 */
var numPoints = function(darts, r) {
     let maxCount = 1; // at least one dart can be covered (the dart itself)
    const n = darts.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                // Same point, the center is the point itself, radius 0. But we have radius r.
                // So the circle is centered at the point with radius r.
                const [x1, y1] = darts[i];
                let count = 0;
                for (const [x, y] of darts) {
                    const dx = x - x1;
                    const dy = y - y1;
                    if (dx * dx + dy * dy <= r * r + 1e-8) {
                        count++;
                    }
                }
                maxCount = Math.max(maxCount, count);
            } else {
                const [x1, y1] = darts[i];
                const [x2, y2] = darts[j];
                // Calculate the two possible centers for circles passing through both points with radius r
                const q = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                if (q > 2 * r + 1e-8) {
                    continue; // distance between points is more than 2r, no possible circle
                }
                
                // Midpoint of p1 and p2
                const xm = (x1 + x2) / 2;
                const ym = (y1 + y2) / 2;
                
                if (Math.abs(q - 2 * r) < 1e-8) {
                    // Only one center, the midpoint
                    let count = 0;
                    for (const [x, y] of darts) {
                        const dx = x - xm;
                        const dy = y - ym;
                        if (dx * dx + dy * dy <= r * r + 1e-8) {
                            count++;
                        }
                    }
                    maxCount = Math.max(maxCount, count);
                    continue;
                }
                
                // Distance from midpoint to the center
                const d = Math.sqrt(r * r - (q / 2) ** 2);
                
                // Direction vector from p1 to p2
                const dx = x2 - x1;
                const dy = y2 - y1;
                
                // Perpendicular direction
                const px = -dy;
                const py = dx;
                
                // Normalize perpendicular vector
                const len = Math.sqrt(px * px + py * py);
                const nx = px / len;
                const ny = py / len;
                
                // Two centers
                const center1 = [xm + d * nx, ym + d * ny];
                const center2 = [xm - d * nx, ym - d * ny];
                
                // Check both centers
                let count1 = 0;
                let count2 = 0;
                for (const [x, y] of darts) {
                    const dx1 = x - center1[0];
                    const dy1 = y - center1[1];
                    if (dx1 * dx1 + dy1 * dy1 <= r * r + 1e-8) {
                        count1++;
                    }
                    
                    const dx2 = x - center2[0];
                    const dy2 = y - center2[1];
                    if (dx2 * dx2 + dy2 * dy2 <= r * r + 1e-8) {
                        count2++;
                    }
                }
                maxCount = Math.max(maxCount, count1, count2);
            }
        }
    }
    
    return maxCount;
};
