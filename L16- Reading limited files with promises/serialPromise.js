const fs = require("fs").promises;     // by using promise here, we don't need to write it again and again

// let fileRead1 = fs.readFile('./f1.txt');
// console.log(fileRead1);     // returns promise

// Let's calling data serially
let fileRead1 = fs.readFile('./f1.txt');

fileRead1
.then(cb1)
.then(cb2)
.then(cb3)
.catch((error) => console.log(error))

function cb1(data) {
    console.log(''+data);
    let fileRead2 = fs.readFile('./f2.txt');
    return fileRead2;
}

function cb2(data) {
    console.log(''+data);
    let fileRead3 = fs.readFile('./f3.txt')
    return fileRead3;
}

function cb3(data) {
    console.log(''+data);
}

/* OUTPUT
I am f1
I am f2
I am f3
*/