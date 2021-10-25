// globally

// console.log(this);     // rerurn window-object

// inside function

// function showThis(){
//     console.log(this);
// }
// showThis()     // window object as above

// object-> function

// let obj = {
//     name: "tuno",
//     f: function(){
//         console.log(this);
//     }
// }
// obj.f()   // object itself

// object->function->function

// let obj = {
//     name: "tuno",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g()
//     }
// }
// obj.f()    // window-object

