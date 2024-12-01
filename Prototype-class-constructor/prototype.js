// Array --> object --> null
//  String -> Object
// Function
// This keyword : jisne bhi bulayaa hu usmai numb increase krdu
// Page  Call this , class constructor & state
//class user

// Getter  Setter and stck overflow
// help get  password  -> getter
//  set password -> setter

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // prototype ek empty paranthesis hai har ek cheez jakr milti hai object sai

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Quest
// Step 1: Define a constructor function
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

// Step 2: Add a method to the prototype of the constructor
Animal.prototype.makeSound = function () {
  console.log(`${this.name} says: ${this.sound}`);
};

// Step 3: Create an instance of the constructor function
const dog = new Animal("Dog", "Woof");

// Step 4: Use the method defined on the prototype
dog.makeSound(); // Output: "Dog says: Woof"

// Step 5: Add another method to the prototype
Animal.prototype.describe = function () {
  console.log(`This is a ${this.name}.`);
};

// Step 6: Use the new method with the instance
dog.describe(); // Output: "This is a Dog."

// Quest
// Define a constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the prototype
Car.prototype.start = function () {
  console.log(`${this.make} ${this.model} is starting.`);
};

// Create two objects using the constructor
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Both objects share the same prototype
console.log(car1.__proto__ === car2.__proto__); // true

// Use the shared prototype method
car1.start(); // Output: Toyota Corolla is starting.
car2.start(); // Output: Honda Civic is starting.

// Modify the prototype
Car.prototype.drive = function () {
  console.log(`${this.make} ${this.model} is driving.`);
};

// Both objects can now use the new method
car1.drive(); // Output: Toyota Corolla is driving.
car2.drive(); // Output: Honda Civic is driving.

// quest
