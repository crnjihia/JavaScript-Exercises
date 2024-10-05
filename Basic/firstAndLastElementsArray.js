function firstAndLastElementsArray(arr) {
  if (arr.length >= 1) {
    return [arr[0], arr[arr.length - 1]];
  }
  return arr;
}

console.log(firstAndLastElementsArray([1, 2, 3])); // [1, 3]
console.log(firstAndLastElementsArray([5, 6, 7, 8])); // [5, 8]
