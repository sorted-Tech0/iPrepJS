let person = {
    name: "Sonu",
    age: 25,

    showDetails: function(){
        console.log(this.name+" "+this.age);
    }
}

// person.showDetails()

let person2 = {
    name: "Steve"
}

// Let's change the prototype of person2
person2.__proto__ = person;
console.log(person2.name);   // Steve, Obviously BUT
console.log(person2.name+" "+person2.age);  // Steve 25, age is inherited from person, It is called prototypal inheritance
person2.showDetails()   // Steve 25



