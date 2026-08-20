//objects are 2 types 1. literals 2. constructor

//Objects literals

const Jsuser = {
    name: "Kyathi", // key = name , value = "Kyathi"
    age: 19,
    location :"Vijayawada",
    email:"Kyathiganjala@gmail.com",
    isLoggedIn: true,
    lastLoginDays : ["Monday","Saturday"]
} 

console.log(Jsuser.email);//
console.log(Jsuser["email"]);


Jsuser.email = "Chinnu@gmial.com";
// Object.freeze(Jsuser);//after this if we change anything also there will be no change of the next email if any created newly
Jsuser.email = "Kyathi@google.com";
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hellowww JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hellowww JS user ${this.name}`);
}


Jsuser.greeting();//calling the function 

Jsuser.greetingTwo();


//objects part 2

const tinderUser1 = new Object(); //creating an object using new keyword

const tinderUser2 = {};

console.log(tinderUser1);
console.log(tinderUser2);
//these both are same but the first one is created using new keyword and the second one is created using object literal

//this is how we can create nested objects.
const regularUser = {
    email: "kyathi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kyathi",
        }
    }        
}

console.log(regularUser.firstname); //undefined
console.log(regularUser.fullname.userfullname.firstname); //Kyathi

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

const obj3 = Object.assign({},obj1,obj2); //this will merge the two objects into one object

console.log(obj3);

//spread operator
const obj4 = {...obj1,...obj2}; //this will also merge the two objects into one object

console.log(obj4);


const users = [
    {
        id: 1,
        email: "K@gmail.com", 
    },
    {
        id: 2,
        email: "C@gmail.com", 
    },
    {
        id: 3,
        email: "P@gmail.com", 
    },
]

console.log((users[1].email));

console.log(Object.keys(users));//used to get the keys of the object
console.log(Object.values(users));//used to get the values of the object
