const fs = require("fs").promises;

let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt']

let fileReadPromise = fs.readFile(arr[0]);

for(let i = 1; i < arr.length; i++){
    fileReadPromise = fileReadPromise.then( (data) => {
        console.log(''+data);
        return fs.readFile(arr[i]);
    })
}

fileReadPromise.then( (data) => {
    console.log(''+data);
})


/* output serialy
I am f1
I am f2
I am f3
I am f4
*/ 