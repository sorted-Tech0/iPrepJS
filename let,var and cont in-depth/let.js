// let a;
// console.log("a is",a);
// a = 10;
// a = 20;
// console.log("a is", a);
// let a;  // error


// BLOCK : Two curly braces is called bloxk {}

// let a = "apple"
// console.log(a);    // apple
// {
//     console.log(a);   // apple
// }
// console.log(a);     // apple

// BUT

// let a = "apple"
// console.log(a);    // apple
// {
//     let a;
//     console.log(a);   // undefined
// }
// console.log(a);    // apple 


// Shadoing

// let a = "apple"
// console.log(a);    
// {
//     let a = "banana";    // it will hode outer one variable "a"
//     console.log(a);   
// }
// console.log(a);
// it was legel shadowing]

// illegal shadowing
let a = "apple"
console.log(a);    
{
    var a = "banana";    
    console.log(a);   
}
console.log(a);