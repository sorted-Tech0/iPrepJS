let lib = require('./lib');

let ammount = 2000;
let toCut = 200;

function charge() {
    ammount -= toCut;
    console.log(`Remaining ammount is ${ammount}`);
}

// lib.updateAccount('TV', charge);
lib.promiseUpdateAccount("Tv").then(charge);