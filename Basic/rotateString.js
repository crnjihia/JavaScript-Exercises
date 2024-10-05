let str = "w3resource";
function rotate() {
  str = str[str.length - 1] + str.substring(0, str.length - 1);
  console.log(str);
}
setInterval(rotate, 1000);
