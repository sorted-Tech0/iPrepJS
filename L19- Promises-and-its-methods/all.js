// let p1 = new Promise(function (resolve, reject) {
//     resolve('Promise p1 is resolved')
// })

// let p2 = new Promise(function (resolve, reject) {
//     resolve('Promise p2 is resolved')
// })

// let p3 = new Promise(function (resolve, reject) {
//     resolve('Promise p3 is resolved')
// })

// let promiseAll = Promise.all([p1, p2, p3])
// // console.log(promiseAll);   // returns promise
// promiseAll.then((promiseArr) => {
//     console.log(promiseArr);
// })

/*OUTPUT
[
  'Promise p1 is resolved',
  'Promise p2 is resolved',
  'Promise p3 is resolved'
]
*/

// What if any of them promise rejected, then no promise will get output

let p1 = new Promise(function (resolve, reject) {
    resolve('Promise p1 is resolved')
})

let p2 = new Promise(function (resolve, reject) {
    reject('Promise p2 is rejected')
})

let p3 = new Promise(function (resolve, reject) {
    resolve('Promise p3 is resolved')
})

let promiseAll = Promise.all([p1, p2, p3])
promiseAll.then((promiseArr) => {
    console.log(promiseArr);
}).catch( (err) => {
    console.log(err);
})

/* OUTPUT
Promise p2 is rejected
*/ 