var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    let m = num1.length, n = num2.length;
    let result = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    while (result[0] === 0) result.shift();
    return result.join('');
};
