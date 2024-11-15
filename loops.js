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
// do : mai conditon end mai huti hai pehleee do mai kam huta hai phr hum condition check krty hai

// Do while quest
let counter = 0; // Starting value of the counter
const step = 2; // Amount to increment each loop

do {
  console.log(counter); // Print the current counter value
  counter += step; // Increment the counter by the step amount
} while (counter <= 10); // Condition to continue the loop

let number = 1; // Start from 1

do {
  console.log(number); // Print the current number
  number++; // Increment the number
} while (number <= 20); // Continue until number exceeds 20

