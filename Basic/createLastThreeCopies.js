function createLastThreeCopies(str) {
  const lastThree = str.slice(-3);
  return lastThree.repeat(4);
}

console.log(createLastThreeCopies("abcdef")); // "defdefdefdef"
console.log(createLastThreeCopies("xyz")); // "xyzxyzxyzxyz"
