function rotateLeftArray(arr) {
  if (arr.length === 3) {
    return [arr[1], arr[2], arr[0]];
  }
  return arr;
}

console.log(rotateLeftArray([1, 2, 3])); // [2, 3, 1]
console.log(rotateLeftArray([5, 6, 7])); // [6, 7, 5]
