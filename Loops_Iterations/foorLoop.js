//for loops in js 

for(let i=0; i<5; i++){
    console.log(i);
}

console.log("***************");


let arr = [1,2,3,4,5];

for(let i=0; i<arr.length; i++){
    //should print in single line 
    console.log(arr[i]);
}

console.log("******************");

//this allows us to print elements in a single row using process.stdout.write() instead of console.log()
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i + " ");
}