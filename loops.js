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

for (let index = 1; index <= 10; index++) {
  if (index == 8) {
    console.log("Detected 8");
    // break;
    // continue;
  }
  console.log(index);
}
// While : mai hum condition check krty hai if else ki trha huti hai
// tuu jo condition hugi usis hisab sai while loop chlega is mai hum var ko pehle likhty hai frist lienmai upper uske bdd phr us variable ko condiiton dete hai kai kia krna hai kia nh
