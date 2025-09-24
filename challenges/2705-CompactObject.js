var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (obj !== null && typeof obj === "object") {
        const res = {};
        for (let key in obj) {
            if (obj[key]) res[key] = compactObject(obj[key]);
        }
        return res;
    }
    return obj;
};
