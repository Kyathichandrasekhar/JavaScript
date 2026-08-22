//scopes in function 

function one(){
    const name = "kyathi";

    function two() {
        const user = "hardworker";
        console.log(name);
    }
    // console.log(user); -> gives error cause we cannot use 
    // the declared variable out side the function_two.
    
    two()
}

one();