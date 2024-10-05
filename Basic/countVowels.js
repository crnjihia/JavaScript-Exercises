function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("rhythm")); // 0
