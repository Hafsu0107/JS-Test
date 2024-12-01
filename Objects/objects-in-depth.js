//Page no 16 ojects in depth
//objects literals
// const mySym = Symbol("key01"); //--> symbol banaana hai
// const myId = {
//   id: "Hafsa",
//   fullname: "Hafsa Shahid",
//   email: "hafsagmail.com ",
//   age: 18,
//   mySym: "key01", //--> phr symbol ko yhaa likhna hai phr consolelog krdena hai
// };

// console.log(myId.age);
// console.log(myId["mySym"]);
// Object.freeze(myId); ---> greeting
// myId = "Shahid";
//
//Page no 17 object prt 2
//const tinderUser  = new Object()---> singel tun object hai
//const tinderUser = {}; //---> non singel tun object hai

//Page 18 Object de-structure
const book = {
  bookname: "computer",
  price: "50$",
  bookCompany: "Oxford",
};
const { bookCompany: company } = book;
console.log(company);
//Random user me API
