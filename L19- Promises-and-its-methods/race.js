// let p1 = new Promise(function (resolve, reject) {
//     resolve('Promise p1 is resolved')
// })

// let p2 = new Promise(function (resolve, reject) {
//     resolve('Promise p2 is resolved')
// })

// let p3 = new Promise(function (resolve, reject) {
//     resolve('Promise p3 is resolved')
// })

// let promiseRace = Promise.race([p1, p2, p3])
// promiseRace.then((value) => {
//     console.log(value);
// }).catch( (err) => {
//     console.log(err);
// })

// If any one of them sequentialy is resolved it will return it, by saying that promise is resolved. i.e. Who comes first resolved will return to the output.

let p1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 is resolved.')
    }, 500);
})

let p2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 is resolved.')
    }, 1000);
})

Promise.race([p1,p2]).then( (value) => {
    console.log(value);
}).catch( (err) => {
    console.log(err);
})
