// Instead of making objects one by one, we can use constructor to make objects

// let car1 = {
//     brand: "BMW",
//     model: "x5",
//     color: "white"
// }


// let car1 = {
//     brand: "Mercedes",
//     model: "s class",
//     color: "red"
// }

// we can use 'new' keyword with constructor for creating objects

function car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.drive = function(){
        console.log("I am driving "+this.model);
    }
}

// making object
let car1 = new car("BMW", "X5", "white")  // here 'this'-> {}
let car2 = new car("Mercedes", "s class", "red");
console.log(car1);
console.log(car2);

// mutating value for cars

car1.brand = "TATA";
car2.color = "Black"

console.log(car1);
console.log(car2);

car1.drive()