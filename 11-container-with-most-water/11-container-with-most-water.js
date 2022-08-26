/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let ans = 0
    let i = 0;
    let j = height.length-1
    while(i<j){
        ans = Math.max(ans, Math.min(height[i],height[j]) * (j - i))
        height[i] <= height[j] ? i++ : j--
    }
    return ans
    
    // let firstHeight = -1
    // let indx = -1
    // for(let i = 0;i<height.length;i++){
    //     let currentHeight = height[i]- i
    //     if(firstHeight <= currentHeight){
    //         firstHeight = currentHeight
    //         indx = i
    //     }
    // }
    // let maxArea = -1
    // // console.log(firstHeight,indx)
    // for(let i = indx;i<height.length;i++){
    //     if(firstHeight <= height[i]){
    //         maxArea = Math.max(maxArea,firstHeight*(i-indx))
    //     }else{
    //         maxArea = Math.max(maxArea,height[i]*(i-indx))
    //     }
    //     console.log(maxArea)
    // }
    return maxArea
    
    
};