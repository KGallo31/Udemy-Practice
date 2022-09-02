/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    for(let val of nums){
        if(obj[val]) obj[val]++ 
        else obj[val] = 1
    }
    let maxElement = [0,0]
    for(let key in obj){
        if(obj[key] > maxElement[1]){
            maxElement[0] = key
            maxElement[1] = obj[key]
        }
    }
    return maxElement[0]
};