'use strict'

// globally

//console.log(this);    // window object

// inside function

// function showThis(){
//     console.log(this);
// }
// showThis()     // undefined

// object-> function

// let obj = {
//     name: "zuna",
//     f: function(){
//         console.log(this);
//     }
// }
// obj.f()     // object itself

// object->function->function

// let obj = {
//     name: "zuna",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g()
//     }
// }
// obj.f()    // undefined