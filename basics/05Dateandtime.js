// Date 

let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2026,7,15);
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getTime());


//Time stamp

let myTimestamp = Date.now();

console.log(myTimestamp);//output : the milliseconds that have passed from 1970 to till now 

//Time

let now = new Date();

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDay());
console.log(now.getMonth()+1);


now.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})

