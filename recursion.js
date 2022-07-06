// function power(base,exponent){
//     if(exponent === 0) return base;
//     return base * power(base,exponent-1)
// }

// let arr = Array(5)
// for(let i of arr){
//     console.log(i)
// }

// function rotate(nums,k){

// }

// const reverse = (str) => {
//   let finalStr = "";

//   const helper = (str, finalStr) => {
//     if (str.length === 0) return finalStr;
//     finalStr = str[0] + finalStr;
//     str = str.substring(1);
//     return helper(str, finalStr);
//   };

//   finalStr = helper(str, finalStr);

//   return finalStr;

//   if (str.length === 0) return str;
//   str[0] = str.substring(str.length - 1);
//   str = str.substring(1);
//   return  reverse(str);
// };

// let str = "awesome";

// console.log(reverse(str));

// function flatten(arr){
//     let finalArr = []

//     const helper = (arr,finalArr) => {
//         if(arr.length === 0) return finalArr
//         finalArr = [...finalArr, ...arr[0]]
//         console.log(finalArr)
//         return helper(arr.slice(1),finalArr)
//     }

//     finalArr = [...helper(arr,finalArr)]

//     return finalArr
// }

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// function binarySearch(arr, target) {
//   let left = 0,
//     right = arr.length-1;
//   while (left < right) {
//     let mid = Math.floor((right + left) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] > target) right = mid;
//     if (arr[mid] < target) left = mid+1;
//     console.log(`left:${left} right:${right} mid:${mid}`)
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 10));

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const obj = {
  hi: "by",
};
console.log(obj["hi"]);
// console.log(bubbleSort([24, 43, 12, 75, 11, 9, 25]));
