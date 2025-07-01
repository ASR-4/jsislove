// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-06-1")

let myCreatedDate = new Date("06-01-2025")


// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getHours());


const date = newDate.toLocaleString('default',{
    weekday:"long",
    
})

console.log(date);














