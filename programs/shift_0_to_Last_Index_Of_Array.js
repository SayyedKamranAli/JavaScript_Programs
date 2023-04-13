let arr = [1, 0, 0, "a", 2, "c", 0, 9, 1, "d"];

for (let i = 0; i < arr.length; i++) {
  i = arr.sort((a, b) => {
    (a === 0) - (b === 0);
  });
  console.log("i", i);
}
