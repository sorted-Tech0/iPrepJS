Array.prototype.myMethod = function(){
    
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(cb(arr[i]));
    }
    return newArray;
}

function cb(x) {
    return x * x;
}

let arr = [1,2,3,4];
// console.log(arr.myMethod());

// or same
// Map

Array.prototype.myMap = function(cb){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(this[i]);
    }
    return newArray;
}

function square(x){
    return x * x;
}

let mappedArray = arr.myMethod(square);
// console.log(mappedArray);


// Filter

Array.prototype.myFilter = function(cb){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(this[i])){
            newArray.push(this[i]);
        }
    }
    
    return newArray;
}

function operation(x){
    if(x % 2 === 0){
        return true;
    }
}

let filteredArray = arr.myFilter(operation);
console.log(filteredArray);