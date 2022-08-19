/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer = 0
    for(let char of t){
        // if(pointer === s.length) return true
        if(char === s[pointer]) pointer++
    }
    return pointer === s.length
    
};