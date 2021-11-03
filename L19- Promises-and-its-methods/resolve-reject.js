// .resolve()
// let p1 = Promise.resolve('Promise resolved').then( (val) => {
//     console.log(val);
// });

// .reject()

let p2 = Promise.reject('Promise is rejected.').catch( (err) => {
    console.log(err);
})
