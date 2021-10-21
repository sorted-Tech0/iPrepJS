// Objects

// let object = {
//     name: "Alex",
//     lastName: "Johansans",
//     sayHi: function() {
//         console.log("alex say's Hi.");
//     }
// }
// console.log(object);

// looping in object
// for(let key in object){
//     console.log(key," : ", object[key]);
// }
// object.sayHi()


// ARRAYS

// let arr = [1,2,3,4,5];
// arr.prop = "hello";
// arr.Print = function() {
//     console.log("Hello from array");
// }
// for(let key in arr){
//     console.log(key," : ", arr[key]);
// }
// console.log(arr);

//functions

function fn() {
    console.log("Hello from fn");
}
fn.prop = "property of fn";
fn.myFunc = function(){
    console.log("I am a method of the function");
}

// console.log(fn);
fn()
fn.myFunc()
console.log(fn.prop);