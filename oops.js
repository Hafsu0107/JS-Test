//  # javascript and classes

// ## OOP

// ## Object
// - collection of properties and methods
// - toLowerCase

// ## why use OOP

// ## parts of OOP
// Object literal

// - Constructor function
// - Prototypes
// - Classes
// - Instances (new, this)

// ## 4 pillars
// Abstraction -> Details hide krlenaa. eg: fetch.
// Encapsulation ->wrrapap krlete hai jo jo chyee ussy acces krty hai
// Inheritance
// Polymorphism -> bht sary role play krna.

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
