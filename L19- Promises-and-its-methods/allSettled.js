// let p1 = new Promise( (resolve, reject) => {
//         resolve('Promise 1 is resolved.')
// })

// let p2 = new Promise( (resolve, reject) => {
//         resolve('Promise 2 is resolved.')
// })

// let p3 = new Promise( (resolve, reject) => {
//     resolve('Promise 3 is resolved.')
// })

// Promise.allSettled([p1,p2,p3]).then( (value) => {
//     console.log(value);
// }).catch( (err) => {
//     console.log(err);
// })

/* OUTPUT
[
  { status: 'fulfilled', value: 'Promise 1 is resolved.' },
  { status: 'fulfilled', value: 'Promise 2 is resolved.' },
  { status: 'fulfilled', value: 'Promise 3 is resolved.' } 
]
*/ 

let p1 = new Promise( (resolve, reject) => {
    resolve('Promise 1 is resolved.')
})

let p2 = new Promise( (resolve, reject) => {
    reject('Promise 2 is reject.')
})

let p3 = new Promise( (resolve, reject) => {
resolve('Promise 3 is resolved.')
})

Promise.allSettled([p1,p2,p3]).then( (value) => {
console.log(value);
}).catch( (err) => {
console.log(err);
})

/* OUTPUT
[
  { status: 'fulfilled', value: 'Promise 1 is resolved.' },
  { status: 'rejected', reason: 'Promise 2 is reject.' },
  { status: 'fulfilled', value: 'Promise 3 is resolved.' }
]
*/