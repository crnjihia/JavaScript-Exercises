function largestFirstLastSetAll(arr) {
  if (arr.length >= 2) {
    const largest = Math.max(arr[0], arr[arr.length - 1]);
    return arr.map(() => largest);
  }
  return arr;
}

console.log(largestFirstLastSetAll([20, 30, 40])); // [40, 40, 40]
console.log(largestFirstLastSetAll([15, 10, 25])); // [25, 25, 25]
