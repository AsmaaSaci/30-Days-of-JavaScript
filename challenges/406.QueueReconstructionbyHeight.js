let reconstructQueue = function (people) {
    let res = [];
    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
    people.forEach(val => { res.splice(val[1], 0, val) })
    return res
}
