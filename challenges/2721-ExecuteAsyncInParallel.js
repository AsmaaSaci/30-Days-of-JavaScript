var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        functions.forEach((fn, i) => {
            fn()
                .then(res => {
                    results[i] = res;
                    completed++;
                    if (completed === functions.length) resolve(results);
                })
                .catch(reject);
        });
        if (functions.length === 0) resolve([]);
    });
};
