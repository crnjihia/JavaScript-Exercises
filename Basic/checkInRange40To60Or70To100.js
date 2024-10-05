function inRange(a, b) {
  return (
    ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) &&
    ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))
  );
}

console.log(inRange(45, 90));
console.log(inRange(30, 80));
