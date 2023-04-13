let num = 6;

function recurssion(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * recurssion(num - 1);
  }
}
let result = recurssion(num);
console.log("recurssion("+num+")",result);
