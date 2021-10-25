function add(){
    let a = 4;
    function addChild(){
        console.log(a+5);
    }

    addChild()
}

add()  // 9
// Thats called Lexical Scoped: The inner function can access the variables defined in the scope.

//closure
function add(){
    let a = 4;
    function addChild(){
        console.log(a+5);
    }

    return addChild
}

let catchAdd = add();
console.log(catchAdd);  // [Function: addChild]: because it return inner function as it is, we need to call this function as well

// catchAdd();  // 9

add()();