// A very simply way to check if a number is a decimal or integer is to see 
// if there is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(0)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
