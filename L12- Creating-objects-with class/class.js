class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    showDetails(){
        return this.name+" "+this.age
    }
}

// Let's creating objects
// let person1 = new Person("Sonu", 17);
// console.log(person1);
// console.log(person1.showDetails());

// Let's do classical inheritance

class childClass extends Person {
    constructor(){
        super("Steve", 12);
    }
}

let person1 = new childClass();
console.log(person1);