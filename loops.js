// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(i);
// }
// <=, <
// loop in loop

for (let j = 0; j <= 10; j++) {
  console.log("Outer loop value: ${j}");
  for (let a = 0; a <= 10; a++) {
    console.log(a + "*" + j + " = " + a * j);
  }
}
