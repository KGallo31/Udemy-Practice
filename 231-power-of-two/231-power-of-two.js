/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    Math.abs(n)
    if(n === 1) return true
    if(n % 2 !== 0 || n === 0) return false
    return isPowerOfTwo(n/2)
    
};