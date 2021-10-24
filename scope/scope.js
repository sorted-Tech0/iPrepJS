// var a = 10;
// function func() {
//     var a = 20;
//     console.log(a);
// }
// func()  // 20

console.log("line number 1", a);     // undefined
var a = 10;
// fn b function definition
function b() {
    console.log("line number 5", a);      // a = 10, lexically scoped, will take before definition variable taken
}

console.log("line number 7", a);   // globally-one  10

function fn() {
    console.log("line number 9", a);   // new scope made so undefined
    var a = 20;
    // from fn
    b();
    console.log("line number 13", a);   // 20 locally
}
fn();