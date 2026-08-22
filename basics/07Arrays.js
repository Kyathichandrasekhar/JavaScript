// Arrays 

//type 1 
const arr = [0, 1, 2, 3, 4]

console.log(arr[3]);

//type 2 
const Myarray = new Array(1,2,3,4)
console.log(Myarray[2]);

// Array methods 
Myarray.push(5)
console.log(Myarray);

//shift = pop , unshift = push at front
Myarray.unshift(15);
console.log(Myarray);

Myarray.shift(15);
console.log(Myarray);

// .includes = says value contains or not
console.log(Myarray.includes(15));

//slice, splice 

console.log("A", Myarray);

const mun1 = Myarray.slice(1,3);
console.log("Slice :",mun1);

console.log("Splice :",Myarray.splice(1,3));


//concatenate 

const arr2 = new Array( 1, 3, 6, 7, 8)
const arr1 = new Array( 2, 4, 5, 9, 8)

const concatenate = arr.concat(arr1);

console.log(concatenate);


// spread out values 

const new_elements  = [...arr,...arr1];

console.log(new_elements);

//flat = makes the multiple inside arrays inside {1,2,3,{3,4,5 ,{4,5}}} like this then flat makes into single array

//convert string to array 'Array.form' method is used to convert string into array
console.log(Array.from("Kyathi"));

console.log(Array.isArray([1,2,3,4,5]));

console.log((Array.of(1,2,3,4,5)));
