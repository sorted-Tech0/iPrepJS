// function greet(personName){
//     let msg = "Hello "+personName
//     console.log(msg);
// }

// greet("Sonu")   // Hello Sonu

// Let's print that statement by another function

// function greet(personName, anotherFunction){
//     let msg = "Hello "+personName
//     anotherFunction(msg);
// }

// function anotherFunction(msg){
//     console.log(msg);
// }

// greet("Sonu", anotherFunction);    // Hello Sonu, i.e. same as earlier

// NOTE: Here "anotherFunction" is working as callback, because we are doing some work by calling it inside the first function scope.
// Below is the function signature for callback

// function one(arg1, callback){
//     function callback(){
//         // or you can refer it to somewhere
//     }
// }

// Using two callbacks


// function greet(personName, age,  callback1, callback2){
//     let msg = "Hello "+personName
//     let ageOfPerson = age;
    
//     callback1(msg);
//     callback2(ageOfPerson)
// }

// function printMsg(msg){
//     console.log(msg);
// }

// function printAge(age) {
//     console.log(age);
// }  

// greet("Sonu", 25, printMsg, printAge);  // Hello Sonu; 25


// Async Callbacks

console.log('Hello');

setTimeout(() => {
    console.log("I am st1");    
}, 2000);

setTimeout(() => {
    console.log("I am st2");
}, 1000);

function sayBye() {
    console.log("Okay, Bye!");
}

sayBye()