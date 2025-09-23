var expect = function(val) {
    return {
        toBe: function(compare) {
            if (val !== compare) throw "Not Equal";
            return true;
        },
        notToBe: function(compare) {
            if (val === compare) throw "Equal";
            return true;
        }
    };
};
