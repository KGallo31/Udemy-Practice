/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    const hashST = {}
    const hashTS = {}
    
    for(let i = 0;i<s.length;i++){
        let char1 = s[i]
        let char2 = t[i]
        
        if((hashST[char1] && hashST[char1] != char2 ) ||(hashTS[char2]) && hashTS[char2] != char1 ) return false
        
        hashST[char1] = char2
        hashTS[char2] = char1
    }
    return true
    
    
    // const hash = {}
    // for(let i = 0;i<s.length;i++){
    //     if(hash[s[i]]){
    //         hash[s[i]].push(i)
    //     }else{
    //         hash[s[i]] = [i]
    //     }
    // }
    // // console.log(hash)
    // let j = 0
    // for(let i = 0;i<t.length;i++){
    //     if(hash[s[j]].length > 1){
    //         for(let k = 0;k<hash[s[j]].length;k++){
    //             let idx = hash[s[j]][k]
    //             s = s.replace(idx,t[i])
    //         }
    //     }
    //     s = s.replaceAt(j,t[i])
    //     j++
    // }
    // // console.log(s)
    // if(s === t) return true
    // return false
//     
};