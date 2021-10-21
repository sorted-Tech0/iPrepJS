// console.log(global);
// console.log(this);

// Hoisting in case of variable NOTE: the memory will be allocated "undefined" til it get replace by some value

// console.log("a is ", a);
// var a;
// console.log("a is ", a);
// a = 10;
// console.log("a is ",a);

// Hoisting in case of functions

// fn()
// function fn(){
//     console.log("I can be called before my declaration");
// }
// fn() 

// questions:

// function real() {
//     console.log("I am real.");
// }

// function real() {
//     console.log("No, I am real.");
// }

// function real() {
//     console.log("You both are wasted!");
// }

// real();    // you both are wasted, function changing address everytime

//example

console.log("varName ", varName);
var varName;
console.log("varName ", varName);
varName = "Caption America";
console.log("varName ", varName);
fn();
function fn() {
    console.log("Hello from fn");
}
fn()

// fnContainer();
var fnContainer = function() {
    console.log("I am an expression");
}
fnContainer();