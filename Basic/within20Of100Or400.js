function within20(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

console.log(within20(90));
console.log(within20(380));
