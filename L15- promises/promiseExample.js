let fs = require("fs")

console.log("Before");

let promise = fs.promises.readFile("f1.txt")
console.log(promise);
// fullfiled
promise.then((data) => {
    console.log(''+data);
})
promise.catch((err) =>{
    console.log(err);
})

console.log("After");