const fs = require("fs");

// console.log("Before");

// fs.readFile('f1.txt', callback);

// function callback(err, data) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(" "+data);
//     }
// }

// console.log("After");

/* OUTPUT
before
after
I am f1
*/

// Reading multiple files

// console.log("Before");
// fs.readFile('f1.txt', cb1);
// fs.readFile('f2.txt', cb2);
// fs.readFile('f3.txt', cb3);

// function cb1(err, data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(''+data);
//     }
// }
// function cb2(err, data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(''+data);
//     }
// }
// function cb3(err, data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(''+data);
//     }
// }

// console.log("After");

/* OUTPUT
Before
After
I am f1*
I am f2*
I am f3*
note: here file reading content will be in different order, because in NODEapis the callback resolve first will give output first.
It was in parallal order
*/

// Now let's print it in a particular order

console.log("Before");
fs.readFile('f1.txt', cb1);
function cb1(err, data){
    if(err){
        console.log(err);
    } else {
        console.log(''+data);

        fs.readFile('f2.txt', cb2);
        function cb2(err, data){
            if(err){
                console.log(err);
            } else {
                console.log(''+data);

                fs.readFile('f3.txt', cb3);
                function cb3(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(''+data);
                    }
                }
            }
        }
    }
}

console.log("After");

/* OUTPUT
Before
After
I am F1
I am F2
I am F3
*/