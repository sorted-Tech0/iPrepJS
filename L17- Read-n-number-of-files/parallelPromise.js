const fs = require("fs").promises;

let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt']

for (let i = 0; i < arr.length; i++) {
    let fileReadPromise = fs.readFile(arr[i]);
    fileReadPromise
    .then( (data) => {
        console.log(data+"");
    })
    .catch( (error) => {
        console.log(error);
    })
}

// Output received in scattered way i.e parallaly
