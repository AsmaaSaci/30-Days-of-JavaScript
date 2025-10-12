let Solution = function (n, blacklist) {
    this.space = n - blacklist.length;
    this.map = {};

    blacklist.forEach((b, i) => {
        const next = this.space + i;

        const head = this.map[b] === undefined ? b : this.map[b];
        const tail = this.map[next] === undefined ? next : this.map[next];

        this.map[head] = tail;
        this.map[tail] = head;
    });
}

Solution.prototype.pick = function () {
    const result = Math.floor(Math.random() * this.space);
    return this.map[result] || result;
}
