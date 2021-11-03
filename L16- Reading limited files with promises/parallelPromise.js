const fs = require("fs");

let fileRead1 = fs.promises.readFile('./f1.txt');
// console.log(fileRead1);     // returns promises

let fileRead2 = fs.promises.readFile('./f2.txt');

let fileRead3 = fs.promises.readFile('./f3.txt');

// fileRead1.then((data) => {
//     console.log(data+'');
// })
// fileRead2.then((data) => {
//     console.log(data+'');
// })
// fileRead3.then((data) => {
//     console.log(data+'');
// })

// It will give scattered/ parallel data to us

// Trying to do with async-await


async function readfile(filepath) {
    try {
        let file1 = await fs.promises.readFile(filepath)
        console.log(file1+"");
    } catch (error) {
        console.log(error);
    }
}

readfile('./f1.txt');
readfile('./f2.txt');
readfile('./f3.txt');

// giving scattered data randomly
