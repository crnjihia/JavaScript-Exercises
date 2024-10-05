function checkOneInFirstOrLastPosition(arr) {
  return arr[0] === 1 || arr[arr.length - 1] === 1;
}

console.log(checkOneInFirstOrLastPosition([1, 2, 3])); // true
console.log(checkOneInFirstOrLastPosition([2, 3, 1])); // true
console.log(checkOneInFirstOrLastPosition([2, 3, 4])); // false
