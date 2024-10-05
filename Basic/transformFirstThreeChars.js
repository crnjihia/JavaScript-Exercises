function transformFirstThree(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  return str.slice(0, 3).toLowerCase() + str.slice(3);
}

console.log(transformFirstThree("PYTHON"));
console.log(transformFirstThree("JS"));
