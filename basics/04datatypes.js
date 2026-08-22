// JavaScript Data Types

// 1. String
const name = "Kyathi";

// 2. Number
const age = 21;
const price = 99.99;

// 3. Boolean
const isLoggedIn = true;

// 4. Undefined
let score;

// 5. Null
const user = null;

// 6. BigInt
const bigNumber = 12345678901234567890n;

// 7. Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// 8. Object
const student = {
    name: "Kyathi",
    age: 21
};

// Checking data types
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof score);       // undefined
console.log(typeof user);        // object
console.log(typeof bigNumber);   // bigint
console.log(typeof id);          // symbol
console.log(typeof student);     // object