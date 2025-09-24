var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key) && this.cache.get(key).expiry > Date.now();
    const expiry = Date.now() + duration;
    if (this.cache.has(key)) clearTimeout(this.cache.get(key).timer);
    const timer = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { value, expiry, timer });
    return exists;
};

TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const entry = this.cache.get(key);
    if (entry.expiry <= Date.now()) {
        this.cache.delete(key);
        return -1;
    }
    return entry.value;
};

TimeLimitedCache.prototype.count = function() {
    let c = 0;
    for (let [key, entry] of this.cache) {
        if (entry.expiry > Date.now()) c++;
        else this.cache.delete(key);
    }
    return c;
};
