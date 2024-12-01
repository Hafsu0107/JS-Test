// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(i);
// }
// <=, <
// loop in loop
//Loops
// Page no 27 For Loop
//loop mai sbse pehly index initialize huta hai phr uske bd check huti hai condition agr apki tru hai condition to phr code execute huga
//jese ek br cll hugya uske bdd index ki value barhadeta hai

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genre: "Science Fiction",
};

// Using for...in to iterate through the properties
for (let key in movie) {
  // console.log(`${key}: ${movie[key]}`);
}

// Date and time

let myNewDate = new Date(2000, 1, 1);
// console.log(myNewDate.toLocaleString());
// console.log(myNewDate.toString());
// console.log(myNewDate.toDateString());

let myCurrentDate = new Date();
// console.log(myCurrentDate);

for (let j = 0; j <= 10; j++) {
  console.log(`Outer loop value: ${j}`);
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

// for of loop : --> ye sb array specific loops hai. String object means kis cheez pr loop lagana hai  array ye sb itterators hai hum in mai loops lgaskty hai

//ques no 1
// for of : jb arrays mai laganaa hu to for of msi jdr krege
const arr = ["spiderman"]; // declare var
for (const name of arr) {
  // declare for of formula  and add loop for obj
  console.log(name); // then print valye
}
const object = "hafsa";
for (const name of object) {
  console.log(name);
}

// Maps : map ek object hai jo hold krta hai key value pair

const map = new Map();
map.set("PAK", "PAkistan");
console.log(map);
for (const [key, value] of map) {
  // console.log(country);
  console.log(key, ":-", value); //--> key sai sari value alag alag print hujayege
}

// for in loops : jb object mai loop lagana hu tu for in loop use kregee
const myObject = [7];
for (const key in myObject) {
  console.log(key);
}
// .forEach loop hmae value wapis nh krta
//function
// const languages = ["css", "java", "php", "python "];
// languages.forEach(function (val) {
//   console.log(val);
// });

// arrow function
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry

//index arrow function
const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
  console.log(`Color at index ${index} is ${color}`);
});

// Output:
// Color at index 0 is red
// Color at index 1 is green
// Color at index 2 is blue

// .filter bhi call back hi lait hai or ye values return krdeta hai hr value ko acces kia jayega
// uske bdd condtion deni prhti hai jo jo condition true huwe wo values return  hugi wrna wo values return nh hugi
// or jb hum arrow function kai bdd isko dusre method sia likty hai iski condition jb scope kai andr likhty hai tu phr return likh kr value likhni huti hai wrna return nh hugaa

const myNum = [1, 2, 3, 4, 5, 6, 7];
// const newNums = myNum.filter((num) => num > 5); --> basic methode
// console.log(newNums);

const newNums = myNum.filter((num) => {
  //--> scope methode
  return num > 5;
});
// console.log(newNums);

// const newNums = [8, 9, 23, 45];
newNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});
console.log(newNums); // filter ko hum 1 line mai bhi likhskty hai or chahee tu return keyword mai bh likhdety hai

const cars = [
  {
    title: " car one",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    isElectric: false,
  },
  {
    title: " car two",
    brand: "suzuki",
    model: "Corolla",
    year: 2022,
  },

  {
    title: " car three",
    brand: "swift",
    model: "mercidies",
    year: 2021,
    isElectric: "false",
  },
  {
    title: " car one",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    isElectric: false,
  },
  {
    title: " car two",
    brand: "suzuki",
    model: "Corolla",
    year: 2022,
  },

  {
    title: " car three",
    brand: "swift",
    model: "mercidies",
    year: 2021,
    isElectric: "false",
  },
  {
    title: " car one",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    isElectric: false,
  },
  {
    title: " car two",
    brand: "suzuki",
    model: "Corolla",
    year: 2022,
  },

  {
    title: " car three",
    brand: "swift",
    model: "mercidies",
    year: 2021,
    isElectric: "false",
  },
];
let userCars = cars.filter((car) => car.model === "suzuki");
console.log(userCars);
userCars = cars.filter((car) => {
  return car.year >= "2021";
});
console.log(userCars);
