// Merge and Binary Search
// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Merge any leftover elements
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }
  const unsortedArray =[45,12,6,89,2,5] ;
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);


function binary(num,target){
let left=0;
let right = num.length-1;
while (left<=target){
let middle=Math.floor((left+right)/2);
if (num[middle]===target){
    return middle
}
else if (num [middle]>target){
    right=middle-1;
}
else {
    left=middle+1;
}


}


return null;
}
let num=[45,12,6,89,2,5];
let target=6;

console.log(binary(num,target));

//2. Given an unsorted array of numbers return the sorted array in descending order
// let array=[123,89,5,23,9,56]
function mergeSort(arr) {
  if (array.length <= 1) {
    return arr3;
  }

  const middle = Math.floor(array.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Merge any leftover elements
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}
const unsortedarray =[45,12,6,89,2,5] ;
const sortedarray = mergeSort(unsortedarray);
console.log(sortedarray);
  



//3. Given the following array, search for the following target
// let target = 34
// let arr3 = [1,4,78,2,67,3];

function mergeSort(arr) {
    if (arr3.length <= 1) {
      return arr3;
    }
  
    const middle = Math.floor(arr3.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Merge any leftover elements
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }
  const unsortedArray3 =[45,12,6,89,2,5] ;
const sortedArray6 = mergeSort(unsortedArray3);
console.log(sortedArray6);


function binary(num,target){
let left=0;
let right = num.length-1;
while (left<=target){
let middle=Math.floor((left+right)/2);
if (num[middle]===target){
    return middle
}
else if (num [middle]>target){
    right=middle-1;
}
else {
    left=middle+1;
}


}


return null;
}
let arr3=[1,4,78,2,67,3];
let target2=34;
console.log(binary(array3,target));


