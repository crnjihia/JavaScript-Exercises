function moveLastThreeChars(str) {
  return str.length >= 3 ? str.slice(-3) + str.slice(0, -3) : str;
}

console.log(moveLastThreeChars("abcdef")); // "defabc"
console.log(moveLastThreeChars("xyz")); // "xyz"
