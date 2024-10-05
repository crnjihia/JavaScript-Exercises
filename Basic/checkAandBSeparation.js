function checkAandBSeparation(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(checkAandBSeparation("abxb")); // true
console.log(checkAandBSeparation("baac")); // false
