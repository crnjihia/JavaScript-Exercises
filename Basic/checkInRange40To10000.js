function checkInRange40To10000(num) {
  return num >= 40 && num <= 10000;
}

console.log(checkInRange40To10000(50)); // true
console.log(checkInRange40To10000(40000)); // false
