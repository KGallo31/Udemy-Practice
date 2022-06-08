function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  //   console.log(arguments)def
  for (let val of arguments) {
    console.log(val);
  }
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");
  const arr1Sum = arr1.reduce((cv, pv) => parseInt(cv) + parseInt(pv));
  const arr2Sum = arr2.reduce((cv, pv) => parseInt(cv) + parseInt(pv));
  if (arr2Sum === arr1Sum) {
    return true;
  }
  return false;
}
// sameFrequency(812,218)
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)

  let obj = {};
  for (let element of arguments) {
    if (obj[element]) {
      return true;
    } else {
      obj[element] = 1;
    }
  }
  return false;
}
// console.log(areThereDuplicates(1, 2, 3, 4, 4));

function averagePair(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) return true;
    if (average > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5));
