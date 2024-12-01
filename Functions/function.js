//Page no 19 Functions and Parameters
//Function : jitnii line ka code hu usko ek pkg mai krdena func kehlata hai
// rest(...num) and sperate operator (num...)

// Chat gpt  Questtions

function greet(name) {
  return "Hello hafsa!";
}
console.log(greet(name));

//add numbers
function addNumbers(num1, num2) {
  return 8 + 9;
}
console.log(addNumbers(num1 + num2));

// find max
function findMax(a, b, c) {
  return a, b, c; // return max
}
console.log(findMax(1, 2, 5));

// find minimum
function findMin(x, y, z) {
  return x, y, z;
}
console.log(findMin(9, 10, 6));

// Check Even or Odd

function isEven(number) {
  return number % 2 == 0;
}
console.log(isEven(5)); // output false bcz its odd
console.log(isEven(4)); // output true bcz its even

// Count Vowels in a string

//Find largest number

// {} is called scope  --> jb ye kisi func kai sth ya if else kai sth atta hai tuu {} scope kehlata hai

// This jb hum kisi function kai andar this ko print krty hai tu bht sari values print huti hai
// Arrow function () =>
// iffe function ko ()kai andr likhty hai or last mai bhi () lagaty hai tu wo iffe kehte hai
// () ko lgaa kr ek blog banjata haii  or woo code  run hujata hai
//Control flow : agr if kai () mai true huga tu andr {} scope kai andr ka code run huga

//conditional base mai pura code run huta hai
//control flow mai pura code reun nh huna chyee\
// 01 if statement if condition ko btati hai
// if (true) huga tu andar wala code run huga or agr false tu andar wlaaa code run nh hugaa
// < lessthan  > greatorthan  <= koi value kisi kai equal ya kisi sai brhi tu nh hai
//<= , ==, != --> kai ek value braber nh hai dusri value sai 3 != 2, === value or type dono same huni chye
const score = 90;
if (score == 50) {
  console.log("student is fail");
} else {
  console.log("student is pass");
}

//switch statement
//falsy values { false, 0 ,-0 ,bigInt ,)n, null, "",  undefined, NaN }
//truely values {"0" , 'false',{}, [], function(){}}

//nullish Coalescing Operator (??): null undefined
var1 = 5 ?? 10;

// bht sary code ki lines ko ek jaga krna function kehlata hai
// function myName() {
//   console.log("H");
//   console.log("A");
//   console.log("F");
//   console.log("S");
//   console.log("A");
// }
// myName();
// This is called function
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
console.log(typeof addTwoNumbers);

addTwoNumbers(5, 1);

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumbers(5, 1);
console.log("Result: ", result);

//Rest operator and spread peratoor (...)
//Rest means kai hamary ps jitny bhi items hai wo hamy ek bikhra huwa mila hai usko humne budle mai krna hai is 3 dots sai means rest operator sai.
//val1, val2, ...num1 ---> 1 value val1 laigya or dusra val2 or jo bachi wo num1 mai arrray ki shkal mai aagyi.
//if kai andar jo bhi likha huga wo block scop khelayegaa
//or jo if kai bhr wo global scope kehlayega global scope mai hum jo bhi value likhege wo blck scope mai hamary ps availiable huti hai
//or jo block scope mai value likhty hai wo bhr nh jani chye
