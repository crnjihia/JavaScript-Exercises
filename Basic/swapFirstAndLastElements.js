function swapFirstAndLastElements(arr) {
  if (arr.length >= 1) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
}

console.log(swapFirstAndLastElements([1, 2, 3])); // [3, 2, 1]
console.log(swapFirstAndLastElements([5, 6, 7, 8])); // [8, 6, 7, 5]
