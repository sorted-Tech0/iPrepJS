// globally
// console.log((this));

// Inside function
// function showThis(){
//     console.log(this);
// }
// showThis()

// Inside of function which reside in object

// let obj = {
//     name: "sonu",
//     f: function() {
//         console.log(this);
//     }
// }

// obj.f();

// inside object-> function -> function

// let obj = {
//     name: "sonu",
//     f: function() {
//         function g(){
//             console.log(this);
//         }
//         g()
//     }
// }

// obj.f();









/*
NOTE: 
1. IF we do globally console.log(this) -> we got empty object
2. asking 'this' in function body we got a window object containing setTimeout(), setInterval() etc. functions
3. Inside of function which reside in object-> returns same object itself, in which it is.
4. inside object-> function -> function  -> returns global object


*/