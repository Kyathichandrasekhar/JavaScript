// Normal function

function chai(){
    console.log("DB connected");
}

chai()

// To invoke Immediately and ***Avoid polluting the global scope***

(function(){
    console.log(`DB connected`);
})();

// (function)(execution)

// writing like arrow function 

( () => {
    console.log('DB connected 2');
})();

//*********************** */

(function(myname){
    console.log(`${myname} is a good boy`);
})("Khyathi");


// proper def : IIFE (Immediately Invoked Function Expression) is a JavaScript function expression that is defined and executed immediately after it is created.