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
//      Memory Heap            --  CAll Stack----
//     |           |       | fn               |
//     |           |       | fn               |
//     |           |       | fn               |
//     |           |       | Global           |
//     |           |       |                  |
//     |___________|       |__________________|
