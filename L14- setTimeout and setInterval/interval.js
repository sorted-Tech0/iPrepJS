// Interval: It calls the funcitons or methods after a particular time
// function  sayHi(){
//     console.log("Hii");
// }

// setInterval(() => {
//     sayHi()
// }, 1000);

/*
Hare setInterval() will be called after every second for infinite time

*/ 

// Let's clear the interval
let counter = 0;
function sayHi(){
    counter++;
    console.log("Hi");
    if(counter >= 3){
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(sayHi, 1000);
/*
Here, Hi will print 3 times only, then it will break

*/ 