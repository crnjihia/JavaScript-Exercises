function reverseArrayOfLength3(arr) {
  return arr.length === 3 ? arr.reverse() : arr;
}

console.log(reverseArrayOfLength3([1, 2, 3])); // [3, 2, 1]
console.log(reverseArrayOfLength3([5, 6, 7])); // [7, 6, 5]
