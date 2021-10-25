// MAP-Imperative approach

const myArray = [1,2,3,4,5];

function mapPolifills(arr, cb){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(cb(arr[i]));
    }
    return newArray;
}

function square(ele) {
    return ele*ele;
}

// console.log(myArray);
// console.log(mapPolifills(myArray, square));

// Filter polifils

function filterPolifils(arr, cb) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

function operation(x){
    // condition for filtering
    if(x % 2 === 0){
        return x;
    }
}

console.log(filterPolifils(myArray, operation));