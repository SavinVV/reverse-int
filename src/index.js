module.exports = function reverse (n) {
    let number = '';
    n = Math.abs(n);
    for (let i = String(n).length - 1; i >= 0; i--) {
        number += String(n)[i];
    }
    return number;
};
