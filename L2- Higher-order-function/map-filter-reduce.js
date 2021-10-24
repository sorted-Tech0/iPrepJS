// map

const myArray = [1,2,3,4,5];

const newArray = myArray.map(function(x) {
    return x * x;
})

// console.log(myArray);
// console.log(newArray);

// filter function

const filterArray = myArray.filter(function(x) {
    return x % 2 === 0
})
console.log(filterArray);

// reduce function

let sumArray = myArray.reduce(function(accumalator, x){
    return accumalator + x;
}, 0);

console.log(sumArray);