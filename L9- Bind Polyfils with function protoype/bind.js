let person1 = {
    name : "Loki",
    age: 25
}

function showDetails(city, state){
    console.log(this.name+" "+this.age+" "+city+" "+state);
}

let showDetailsBind = showDetails.bind(person1, "Noida", "UP");
showDetailsBind();   // loki 25

// Let's do polyfils for it

