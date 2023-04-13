let array = [1, 2, 2, 3, 4, 4];
function findDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) !== index);
}
let result = findDuplicates(array);
console.log("result", result);
