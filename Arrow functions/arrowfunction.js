//Arrow functions are a more concise way to 
// write functions in JavaScript. 
// They are often used for short, 
// single-line functions, 
// and they do not have their own 'this' context.

const user = {
    username : "kyathi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
    }
}

user.welcomeMessage()
user.username = "chinnu"
user.welcomeMessage()

function chai(){
    let username  = "kyathi"
    console.log(this.username);// it wont work under functions, only work in object.
}

chai();

const chai = function () {
    //   normal function
}

//arrow function

const chai = () => {
    let username = "kyathi";
    console.log(this.username);
}

chai()

//shorter EXPRESSION 

const add = (a, b) => a + b;

console.log(add(10, 20));

// Normal function:

// "this depends on how I am called."

// Arrow function:

// "this depends on where I was created.

// => **** You only need a normal function if you specifically want the arrow function to inherit a useful this from that normal function. ***

const person = {
    name: "Khyathi",

    greet: function() {

        const arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

person.greet();