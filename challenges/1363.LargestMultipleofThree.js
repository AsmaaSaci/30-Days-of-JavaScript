/**************************\U0001f60e**************************/
function largestMultipleOfThree(digits) {
    const possibleDigits = [0,1,2,3,4,5,6,7,8,9];
    const sum = digits.reduce((res, curr) => res + curr, 0);
    const freq = digits.reduce((res, curr) => {
        res[curr] = (res[curr] || 0) + 1;

        return res;
    }, {});

    if (sum % 3 !== 0) {
        const singleElement = possibleDigits.find(d => d % 3 === sum % 3 && freq[d]);

        if (singleElement) {
            freq[singleElement]--;
        } else {
            const firstOfTwoDigits = possibleDigits.find(d => d % 3 !== 0 && d % 3 !== sum % 3 && freq[d]);

            freq[firstOfTwoDigits]--;

            const secondOfTwoDigits = possibleDigits.find(d => d % 3 !== 0 && d % 3 !== sum % 3 && freq[d]);

            if (secondOfTwoDigits) {
                freq[secondOfTwoDigits]--;
            } else {
                return "";
            }
        }
    }
    
    const result = possibleDigits.reverse().map(d => {
        let s = '';
        while (freq[d]) {
            s += d;
            freq[d]--;
        }

        return s;
    }).join('');

    if (result && result[0] === '0') {
        return '0';
    }

    return result;
};
