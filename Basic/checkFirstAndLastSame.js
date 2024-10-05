function checkFirstAndLastSame(arr) {
  return arr.length === 3 && arr[0] === arr[arr.length - 1];
}

console.log(checkFirstAndLastSame([1, 2, 1])); // true
console.log(checkFirstAndLastSame([1, 2, 3])); // false
