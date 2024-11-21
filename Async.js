// --> Javascript
//         -->  Synchronous  --> ek code execute huga phr uske bd execute huga phr uske bdd execute hugaa
//         -->  Single threaded --> ek hi thread pr sb kuxh execute huga
//--> Execution Context                     --> Default
//       -->execute one line of code at a time
//       --> console.log --1
//       --> console.log --2
//      ---> Call stack              ---> Memory heap (each operation waits for the last one to complete before executing)

// write two types of code in js

// 01 BLocking-code         VS         Non-BLocking-code
// Block the flow of program         // Dod not blocking execution
// Read fie sync                    // read file Async

//                 JS Engine
//      Memory Heap    |     --  CAll Stack----
//     |           |   |   | fn --> call-> Set timout              
//     |           |   |   | fn               |
//     |           |   |   | fn               |
//     |           |   |   | Global -----> Add to GLobal stack --> (CB CB)--> Task Queue
//     |           |   |   |    |             |
//     |___________|   |   |____|_____________|
//                     |        |    high propery
//                   WEB API     --------------------
//   | Dom Api                                  |   |
//   | Set timeout  ----->  Register Callback   |   |
//   |Set interval                              |   |
//   |fetch() --> promise  -->(CB CB)-----------|   |
//   |                                              |
//   |                                              |
//   |______________________________________________|

// Jb bhi program execute huta hai usk aek call stack banta hai
// us call stack kai andr hamara Global execution bnta hai 
// or ek ek krke function load kiye jaty hai 
// or execution khtm hune kai bd un function ko unload krdiya jata hai 
// koi aesa resource ya mecanism hu jis mai hum ye boly kai hamy ye kam krke 5 min bd yad diladena
// tu uske liye hum node.api or web.api ko use krty hai  
// 