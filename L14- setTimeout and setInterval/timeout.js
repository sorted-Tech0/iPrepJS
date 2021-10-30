// Normally function execution

// function sayHi(){
//     console.log("Hello");
// }

// sayHi()  // ran in no-time

function sayHi(){
    console.log("Hello");
}
setTimeout(() => {
    sayHi()
}, 5000);
console.log("Bye");
sayHi()
/*
Bye
Hello

sayHi() will be called after 5 sec.
*/ 

