// function sayHello(param){
//     console.log("hello", param);
//     return "10"
// }

// sayHello(10)
// console.log("```````````````````");
// sayHello("hello")
// console.log("```````````````````");
// sayHello([1,2,3,4,5,6])
// console.log("```````````````````");
// sayHello({ name: "Sonu"});
// console.log("``````````");
// sayHello()   // Hello undefined
// let returnVal = sayHello();
// console.log(returnVal);



//NOTE:  functions are first class citizen

// Function expressions

// let fnContainer = function fn() {
//     console.log("I am function Expression");
// }

// fnContainer();    // "I am function Expression"

//Annonymous name
// let fnAnnonymous = function() {
//     console.log("I am function Expression and Annonymous too!");
// }

// fnAnnonymous();


// IIFIs

// (function fn() {
//     console.log("I am IIFI");
//     console.log("I will run on my own.");
// })()

//ARROW Function

// let fun = (num) => {
//     return num * num;
// }

// or
// let fun = num => num * num;

// let ans = fun(3) 
// console.log(ans); // 9

// passswing function as a parameter to the another function

// function sayHello(param) {
//     console.log("Hello ", param);
//     param();
//     return "default string returning"
// }

// function smaller(){
//     console.log("Hello, I am smaller function");
// }

// let ans = sayHello(smaller)
// console.log(ans);

// returning function from a function

function outer() {
    console.log("I am outer returning inner");
    return function() {
        console.log("I am inener.");
    }
}

let ans = outer();
console.log("ans ", ans);
ans()