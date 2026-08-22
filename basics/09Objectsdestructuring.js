//object destructuring

const course = {
    coursename: "JavaScript",
    price: "299",
    courseeteacher: "Kyathi",
}

const { coursename, price: $, courseeteacher } = course; //this is called object destructuring

//these will helps us to extract the values from the object and assign them to variables with the same name as the keys in the object.
console.log(coursename);
console.log($);//we can destructure our object with our own name.
console.log(courseeteacher);

const navbar = ({ company }) => {
    //this is called object destructuring in function parameters
    console.log(company);
}

navbar({ company: "kyathi" });


// what is api? : Application Programming Interface which is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other and share data and functionality. APIs can be used to access web services, databases, and other resources, enabling developers to create new applications or integrate existing ones.


//this is a JSON object which is a data format that is used to represent data in a structured way. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON objects are used to transmit data between a server and a web application, as well as between different parts of an application.
// {
//     "name": "kyathi",
//     "age": 22,
//     "email": "kyathi@example.com"
// }

//all apis are in json format but not all json are apis. JSON is a data format, while an API is a set of rules and protocols for accessing and manipulating data. An API can use JSON as a data format for transmitting data, but it can also use other formats such as XML or plain text. In other words, JSON is a way to represent data, while an API is a way to access and manipulate that data.
