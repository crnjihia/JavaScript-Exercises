function middleThreeChars(str) {
  const middle = Math.floor(str.length / 2);
  return str.length >= 3 ? str.slice(middle - 1, middle + 2) : str;
}

console.log(middleThreeChars("abcdefg")); // "cde"
console.log(middleThreeChars("javascript")); // "ava"
