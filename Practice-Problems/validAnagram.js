// function validAnagram(str1,str2){
//     // add whatever parameters you deem necessary - good luck!

//     if(str1.length !== str2.length){
//         return false;
//     }
//     let obj1 = {}
//     let obj2 = {}
//     for(let char of str1){
//         console.log(char)
//         obj1[char] = ++obj1[char] || 1
//     }
//     for(let char of str2){
//         obj2[char] = ++obj2[char] || 1
//     }
//     console.log(obj1)
//     console.log(obj2)

//     for(let key in obj1){
//         if(!(obj2[key])){
//             return false;
//         }
//         if(obj2[key] !== obj1[key]){
//             return false;
//         }
//     }
//     return true;

//   }
//   console.log(validAnagram('car','rat'))
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let j = 1;
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      counter++;
    }
    j++;
  }
}
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 6]));
