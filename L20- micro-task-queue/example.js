console.log("Program starts");
setTimeout(() => {
    console.log("I am set time out.");
}, 1000);

Promise.resolve().then( (val) => {
    console.log("Promise outout");
})

console.log("Program ends");

/*OUTPUT
Program starts
Program ends  
Promise outout
I am set time out.

HERE: Promise code goes into microtask queue and settimeout code goes into callback queue, However the microtask queue code take palce first than callback queue.
*/ 