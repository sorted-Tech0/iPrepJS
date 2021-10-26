function add(a,b) {
    console.log(a+b);
}

//add(2,3); // 5

// let add2 = add.bind(this, 2);
// add2(3);   //5

// let add2 = add.bind(this);
// add2(2,3); //5

let add2 = add.bind(this,2,3);
add2(); //5