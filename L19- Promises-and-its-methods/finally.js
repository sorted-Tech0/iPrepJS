function test () {
    var a = 1 + 1;
    return new Promise( (resolve, reject) => {
        if(a === 2) {
            resolve('Promise resolved, Yessssssss')
        } else {
            reject('Promise rejected, Noooooooooo')
        }
    })
}

test().then( (value) => {
    console.log(value);
}).catch( (err) => {
    console.log(err);
}).finally( () => {
    console.log('Experiment completed!');
})