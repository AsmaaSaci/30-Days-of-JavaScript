class FreqStack  {
    constructor() {
        this.fmap = new Map()
        this.stack = []
    }

    push(x) {
        let freq = (this.fmap.get(x) || 0) + 1
        this.fmap.set(x, freq)
        if (!this.stack[freq]) this.stack[freq] = [x]
        else this.stack[freq].push(x)
    }

    pop() {
        let top = this.stack[this.stack.length-1], x = top.pop()
        if (!top.length) this.stack.pop()
        this.fmap.set(x, this.fmap.get(x) - 1)
        return x
    }
};
