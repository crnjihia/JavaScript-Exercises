const side1 = 5,
  side2 = 6,
  side3 = 7;
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of the triangle is ${area}`);
