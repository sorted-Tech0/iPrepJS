// const person1 = {
//     name: "Adam",
//     age: 24
// };

// const person2 = person1;

// console.log(person1);

// person2.name = "Steve"
// console.log(person2);

// making it immutable

const person1 = {
    name: "Adam",
    age: 34
}

// const person2 = Object.assign({},person1);
// or by spread operator: spread operator will use different object does same job
const person2 = {...person1};
person2.name = "Steve";
console.log(person1);
console.log(person2)
