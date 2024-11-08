// Variables Asg
// Chat GPT Asg
// let name = "Hafsa";
// let age = 15;
let country = "Pakistan";

// console.log(name);
// console.log(age);
// console.log(country);

//
// let x = 5;
// let y = 9;
// let sum = x + y;
// console.log(sum);

//my quest
// let a = 9;
// let b = 8;
// let subtract = a - b;
// console.log(subtract);

// Kuke hum constant mai variable declare krty hai lkn reassign nh krsktyy
// const myId = 9;
// myId = 10;
// console.log(myId);

//String manupulation
// to variable bnay string mai orr undono stirng ko 3rd variable kai sth add krdena string manupulation kehlata hai
let myName = "Hafsa";
let fName = "Shahid";
let fullName = myName + "" + fName;
// console.log(fullName);

//my quest
let userName = "Hafsa";
let nickName = "Happaa";
let idName = userName + "" + nickName;
// console.log(idName);

//Greeting

//my quest

// let name = "hafsa";
let greeting = "Hello";
let message = "${greeting}, ${name}! How are you!";
// console.log(message);

// Numbs and Basic maths
// My quest

//Addition
// let a = 5;
// let b = 9;
// let add = a + b;
// console.log(add);

// //sub
// let x = 9;
// let y = 8;
// let minus = x - y;
// console.log(minus);

//multiply
// let x = 9;
// let y = 8;
// let multiply = x * y;
// console.log(multiply);

//divide
// let x = 9;
// let y = 8;
// let divide = x / y;
// console.log(divide);

//increment and decrement
let score = 10;
console.log(score); //1st output 10

 score++; //increment output 11
 console.log(score);

score--; //decrement 10
console.log(score);

//
// let number = 50;
// console.log(number);

// number++;
// console.log(number++);

// number--;
// console.log(number);

// Boolean and Condition

let numb = 9;
if (numb % 2 == 0) {
  console.log("it is even");
} else {
  console.log("it is odd");
}
//<
let totalNumb = 50;
if (totalNumb < 90) {
  console.log("Passed");
} else {
  console.log("fail");
}
//===
let number = 10;
if (number === 9) {
  console.log("it is equal ");
} else {
  console.log("it is not equal");
}
// !=
let numb1 = 10;
if (numb1 != 1) {
  console.log("it is not  equal ");
} else {
  console.log("it is  equal");
}

// Arrays and Object
//.push
chars = [1, 2, 3, 4, 5, 6];
chars.push(9);
console.log(chars);

//.pop
let copies = [6, 9];
copies.pop();
console.log(copies);
//object
let student = {
  name: "Hafsa",
  age: 15,
  isStudent: "true",
};
student.age = 18;
console.log(student);

// Undefined and null

let myChildren;
console.log(typeof myChildren);

let myPlace = null;
console.log(typeof myPlace);

//Scope demonstration

function user() {
  let message = "Hello, Hafsa";
  console.log(message);
}
user();
console.log(message);

// Datatypes Assignment

let a = "Hafsa"; //--> string
let b = 18; //--> number
// let x = "True";//--> undefined
let y = []; //--> object
let name = true;
let laptop = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof x);
console.log(typeof y);
console.log(typeof name);
console.log(typeof laptop);

// Type Conversation

let number1 = "25";
console.log(number1);
console.log(typeof number1);

// Working with boolean values

let itsWatching = true;
console.log(itsWatching);

itsWatching = false;
console.log(itsWatching);

//
let isStuding = false;
console.log(isStuding);

isStuding = true;
console.log(isStuding);

// String Length and Character Access:

let favoritePhrase = "Carpe Diem";

console.log(favoritePhrase.length); // Output: 10

// Access the first and last characters
console.log(favoritePhrase[0]); // Output: "C"
console.log(favoritePhrase[favoritePhrase.length - 1]); // Output: "m"

let favNovel = "Perr-e-Kamil";
console.log(favNovel.length);
console.log(favNovel[0]); // --> 1st letter
console.log(favNovel[favNovel.length - 1]); // --> 2nd letter

//String Manipulation

let firstName = "Hafsa";
let secondName = "Shahid";
console.log(firstName + secondName);

// upper case
let upperCasefirstName = firstName.toUpperCase();
console.log(upperCasefirstName);

let lowerCasesecondName = secondName.toLowerCase();
console.log(lowerCasesecondName);

//Substring and Slice

// Slice method kisi string sai kisi stirng ka  koi bhi prt nikal skty hai
//isko 2 parameter chye huty hai ek start positon kai liye or ek end position kai liye .

var str = "Hafsa, Shahid, Shazia ";
var rest = str.slice(0, 4);
console.log(rest);

//str.slice()
var charc = "Movie, Film, Video";
var charc1 = str.slice(0, 10);
console.log(charc1);

//str.substring()
var sent = "My name is Hafsa";
var sent1 = str.substring(0, 15);
console.log(sent1);

// parseInt, parseFloat
//ParseFloat: convert string into floating-point
//ParseInt : convert string into integers

let strNum1 = "42.5";
let strNum2 = "30";

// Convert using parseFloat and parseInt
let num1 = parseFloat(strNum1);
let num2 = parseInt(strNum2);

console.log(num1); // Output: 42.5
console.log(num2); // Output: 30

//
let stringVal1 = "Hafsa";
let stringVal2 = "44.1";

let val1 = parseFloat(stringVal1);
let val2 = parseInt(stringVal2);
console.log(val1);
console.log(val2);

//Arthimetic  (+,-,*,divide) quest done line numb (53)

//Math.abs(num): Returns the absolute value of num. For -9, this is 9.
//Math.pow(num, 2): Raises num to the power of 2. -9 squared is 81.
// Math.sqrt(num): Returns the square root of a number.
//Since Math.sqrt() returns NaN for negative values, we used Math.abs(num) to ensure the square root of 9 is calculated correctly.

let num = -9;

// Absolute value
let absoluteValue = Math.abs(num);
console.log(absoluteValue); // Output: 9

// Power (raising to the power of 2)
let squared = Math.pow(num, 2);
console.log(squared); // Output: 81

// Square root
let squareRoot = Math.sqrt(Math.abs(num)); // Use Math.abs(num) to avoid NaN for negative values
console.log(squareRoot); // Output: 3

//
let value = -10;

let absoluteVal = Math.abs(value); // convert neg to pstv value
console.log(absoluteVal);

let squaredVal = Math.pow(value, 4); //multiply
console.log(squaredVal);

let sqrtVal = Math.sqrt(Math.abs(value));
console.log(sqrtVal);

// Arrays And Object

let myArray = ["Apple", "Mango", "Bannana", "Stawbery"];
myArray.push("grapes");
console.log(myArray); //add new item

myArray.shift("Apple"); //remove item
console.log(myArray);
//Access the 1 and 2 fruit name
console.log(myArray[1]);
console.log(myArray[2]);

myArray[myArray.length - 1] = "This is fruits";
console.log(myArray);

// print each object

console.log(student.name);

console.log(student.age);

console.log(student.isStudent);

//type coercion is ==,===
let numberOne = "6";
let numberTwo = "7";

// let oneTwo = numberOne === numberTwo;
let oneTwo = numberOne == numberTwo;

let symbol = 0;

if (symbol < 9) {
  console.log("symbol is true");
} else {
  console.log("symbol is false");
}

let forvalue = {};

if (forvalue > 9) {
  console.log("symbol is true");
} else {
  console.log("symbol is false");
}

// Typeof and instanceof
yourArray = [1, 2, 3, 4, 5];

console.log(yourArray instanceof Array);

///
let var1 = 5;
let var2 = 9;
let add = var1 + var2; // -, *
console.log(add);

// detect NaN

let Nan = 0 - 0;
let isValueNan = isNaN(Nan);
console.log(isValueNan);

// check Array type
let isValueArray = Array.isArray(yourArray);
console.log(isValueArray);

///Data Types and Variables Assigment Done

//Loops

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genre: "Science Fiction",
};

// Using for...in to iterate through the properties
for (let key in movie) {
  console.log(`${key}: ${movie[key]}`);
}
