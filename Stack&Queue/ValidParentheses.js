/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    if(str.length <= 1) return false;
    const s = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
            s.push(str[i]);
        } else {
            const popped = s.pop();
            if (!popped || (popped === '[' && str[i] !== ']') || (popped === '{' && str[i] !== '}') || (popped === '(' && str[i] !== ')') ) {
                return false;
            }
        }
    }

    return s.length === 0;
};