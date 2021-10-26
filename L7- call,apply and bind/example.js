// let person1 = {
//     name: "Adam",
//     age: 23,

//     showDetqails: function(){
//         console.log(this.name+" is "+this.age+" years old now");
//     }
// }

// person1.showDetqails()

// let person2 = {
//     name: "Zua",
//     age: 40
// }

//person1.showDetqails.call(person2);    // borrowing showDetails function from first object and calling on second object

// OR


// But it is not required to borrowing from only one object, we can define that method globally

// defining globally
// let showDetqails = function(){
//     console.log(this.name+" is "+this.age+" years old now");
// }

// global object with external parameter

let showDetqails = function(city, car){
    console.log(`${this.name} is ${this.age} years old and he lives in ${city} and drives ${car}`);
}


let person1 = {
    name: "Adam",
    age: 23,
}

let person2 = {
    name: "Zua",
    age: 40
}

// calling function on each object
// showDetqails.call(person1);
// showDetqails.call(person2);

//calll functions with external arguments

// showDetqails.call(person1, "Noida", "BMW")
// showDetqails.call(person2, "Delhi", "alto");


// APPLY method is almost same with slightly different

showDetqails.apply(person1, ['Noida', 'BMW']);
showDetqails.apply(person2, ["Delhi", "alto"])

// slightly diference is: we need to pass argumrents in the array

// BIND: binda the method with that object and put it aside and don't call it immediately, you call call it anywhere any time

let showDetailsBind = showDetqails.bind(person1,'Noida', 'BMW')
showDetailsBind();   // Adam is 23 years old and he lives in Noida and drives BMW