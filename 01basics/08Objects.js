//objects are 2 types 1. literals 2.

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
