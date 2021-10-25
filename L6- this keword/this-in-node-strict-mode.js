'use strict'

// globally

//console.log(this);    // {}

// inside function

// function showThis(){
//     console.log(this);
// }
// showThis()     // return 'undefined'

// object->function

// let obj = {
//     name: "Monu",
//     f: function(){
//         console.log(this);
//     }
// }
// obj.f();     // returns itself object


// object->function->function

// let obj = {
//     name: "monu",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g()
//     }
// }
// obj.f();   // undefined
