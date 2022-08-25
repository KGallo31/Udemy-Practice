/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {}
    for(let char of magazine){
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }
    for(let char of ransomNote){
        if(obj[char] && obj[char] > 0){
            obj[char]--
        }else{
            return false
        }
    }
    return true
};