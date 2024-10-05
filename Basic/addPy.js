function addPy(str) {
  return str.startsWith("Py") ? str : "Py" + str;
}

console.log(addPy("thon"));
console.log(addPy("Python"));
