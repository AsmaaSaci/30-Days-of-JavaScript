var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = salary.reduce((a, b) => a + b, 0);
    return (sum - min - max) / (salary.length - 2);
};
