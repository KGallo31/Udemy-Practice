/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = []
    let totalProduct = 1
    for(let i = 0;i<nums.length;i++){
        totalProduct *= nums[i]
    }
    for(let i = 0;i<nums.length;i++){
        if(i !== 0 ) totalProduct *= nums[i-1]
        if(nums[i] !== 0)  totalProduct = (totalProduct/nums[i])
        else totalProduct = reProduct(nums,i)
        arr.push(totalProduct)
    }
    return arr
    
};

const reProduct = (arr,i) => {
    let product = 1
    for(let j = 0;j<arr.length;j++){
        if(i === j) continue
        product *= arr[j]
    }
    return product
}