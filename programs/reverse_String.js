let str = "Welcome to the Jungle!";
console.log("str", str);
let reverseBySentence = reverseString(str, "");
console.log("reverseBySentence", reverseBySentence);
let reverseByWord = reverseString(reverseBySentence, " ");
console.log("reverseByWord", reverseByWord);

function reverseString(str, reverseByWord) {
  return str.split(reverseByWord).reverse().join(reverseByWord);
}
