let array = [1, 2, 2, 3, 4, 2, 4];
function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
let result = removeDuplicates(array);
console.log("result", result);

