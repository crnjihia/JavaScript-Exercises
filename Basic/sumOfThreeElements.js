function sumOfThreeElements(arr) {
  if (arr.length === 3) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  return null;
}

console.log(sumOfThreeElements([1, 2, 3])); // 6
console.log(sumOfThreeElements([5, 6, 7])); // 18
