function checkEqualPsAndTs(str) {
  const pCount = (str.match(/p/gi) || []).length;
  const tCount = (str.match(/t/gi) || []).length;
  return pCount === tCount;
}

console.log(checkEqualPsAndTs("pathtopper")); // true
console.log(checkEqualPsAndTs("testing")); // false
