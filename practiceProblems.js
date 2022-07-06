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
// console.log(averagePair([1, 2, 3], 2.5))

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallestElement = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestElement] > arr[j]) smallestElement = j;
    }
    if (i !== smallestElement) {
      let temp = arr[i];
      arr[i] = arr[smallestElement];
      arr[smallestElement] = temp;
    }
    console.log(arr);
  }
  return arr;
};
// console.log(selectionSort([55, 12, 32, 11, 8, 23]));
//  i se
// [2,2,12,8,3]

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if(arr[i] < arr[j]){
//         let temp = arr[i]
//         arr.splice(i,1)
//         arr.splice(j,0,temp)
//         console.log(arr)
//         break;
//       }
//     }
//   }
//   return arr;
// };
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cV = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > cV; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    console.log(`done with inner loop j = ${j}`);
    arr[j + 1] = cV;
    console.log("after ", arr);
  }
  return arr;
};
// console.log(insertionSort([55, 12, 32, 11, 8, 23]));

const merge = (arr1, arr2) => {
  const finalArr = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  // My solution
  // while (i < arr1.length && j < arr2.length) {
  //   if (i >= arr1.length) {
  //     finalArr.push(arr2[j]);
  //     j++;
  //   } else if (arr1[i] <= arr2[j]) {
  //     finalArr.push(arr1[i]);
  //     i++;
  //   } else if (arr2[j] <= arr1[i]) {
  //     finalArr.push(arr2[j]);
  //     j++;
  //   }
  // }
  // while(i  < arr1.length){
  //   finalArr.push(arr1[i])
  //   i++
  // }
  // while(j < arr2.length){
  //   finalArr.push(arr2[j])
  //   j++
  // }
  return finalArr;
};

const mergeSort = (arr) => {
  // Udemy Solution
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
  // My Solution
  // if (arr.length <= 1) return arr;
  // const halfArr = [...arr.splice(0, Math.floor(arr.length / 2))];
  // return merge(mergeSort(arr), mergeSort(halfArr));
};
// console.log(mergeSort([43,22,15,9]));

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let sortedIndex = pivot(arr, left, right);
    quickSort(arr, left, sortedIndex - 1);
    quickSort(arr, sortedIndex + 1, right);
  }
  return arr;
};
console.log(quickSort([4, 2, 1, 8, 5, 7, 6, 3]));
