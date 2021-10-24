// impure function

let a = 11;

function addNum(b) {
    console.log('The sum is ', a+b);
}

// addNum(2);

// Pure functions

function addNum(a,b) {
    // console.log('the sum is ', a+b);   // side effect- else we return the function
    return (a+b);
}
console.log(addNum(2,3));