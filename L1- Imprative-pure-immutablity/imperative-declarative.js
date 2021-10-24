// is a number squared is even or not

// Imperative approach
let isEven;
const x = 5;
const xSquared = x * x;
if(xSquared % 2 === 0){
    isEven = true
} else {
    isEven = false;
}
// console.log(isEven);

// Declarative approach

const isSquareEven = (x) => ((x * x) % 2 === 0 ? true: false);
console.log(isSquareEven(4));