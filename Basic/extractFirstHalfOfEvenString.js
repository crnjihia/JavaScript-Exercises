function extractFirstHalf(str) {
  return str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;
}

console.log(extractFirstHalf("hellothere")); // "hello"
console.log(extractFirstHalf("abcdefg")); // "abcdefg"
