function checkCharAtPosition(str, char) {
  return str.charAt(1) === char || str.charAt(3) === char;
}

console.log(checkCharAtPosition("abcdef", "b"));
console.log(checkCharAtPosition("abcdef", "d"));
