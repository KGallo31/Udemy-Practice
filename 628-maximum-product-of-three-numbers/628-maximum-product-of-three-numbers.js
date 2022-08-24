/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const sortedArr = nums.sort((a,b) => a-b)
    let lastIdx = sortedArr.length-1
    let withNeg = sortedArr[0] * sortedArr[1] * sortedArr[lastIdx]
    let lastThree = sortedArr[lastIdx-2] * sortedArr[lastIdx-1] * sortedArr[lastIdx]   
    return Math.max(withNeg,lastThree)
};